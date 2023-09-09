import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Comment } from './comments.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}
  
  async getAllComments(qCommId: number): Promise<Comment[]> {
    if (!qCommId) {
      throw new HttpException(
        'Community id not sent in HTTP request',
        HttpStatus.BAD_REQUEST,
      );
    }

    const comments: Comment[] = await this.commentRepository.findBy({
      commId: qCommId,
    });

    if (!comments) {
      throw new HttpException('Comments not found', HttpStatus.NOT_FOUND);
    }

    return comments;
  }

  async getCommentByUser(qCommId: number, userId: number): Promise<Comment> {
    if (!qCommId || !userId) {
      throw new HttpException(
        'One or two parameteres are undefined or null',
        HttpStatus.BAD_REQUEST,
      );
    }

    const comment: Comment = await this.commentRepository.findOneBy({
      commId: qCommId,
      userId: userId,
    });

    if (!comment) {
      throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
    }

    return comment;
  }

  async postNewComment(
    comment: Partial<Comment>,
    qCommId: number,
  ): Promise<Comment> {
    if (!qCommId) {
      throw new HttpException('Community ID not sent', HttpStatus.BAD_REQUEST);
    }

    comment.commId = qCommId;

    const newComment: Comment = this.commentRepository.create(comment);
    return await this.commentRepository.save(newComment);
  }

  async editComment(
    comment: Partial<Comment>,
    qCommId: number,
  ): Promise<UpdateResult> {
    const updated: UpdateResult = await this.commentRepository.update(
      { commentId: comment.commentId, commId: qCommId },
      comment,
    );

    if (updated.affected === 0) {
      throw new HttpException(
        'Comment not edited',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return updated;
  }

  async deleteComment(
    qCommId: number,
    commentId: number,
  ): Promise<DeleteResult> {
    const deleted: DeleteResult = await this.commentRepository.delete({
      commId: qCommId,
      commentId: commentId,
    });

    if (deleted.affected === 0) {
      throw new HttpException(
        'Comment not deleted',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return deleted;
  }

  async handleError(error: HttpException): Promise<void> {
    throw new HttpException(
      {
        statusCode: error.getStatus(),
        error: error.message,
      },
      error.getStatus(),
      {
        cause: error,
      },
    );
  }
}
