import {
  Body,
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { Comment } from './comments.entity';
import { CommentsService } from './comments.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller()
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}
  @Get('/qCommId')
  async getAllComments(@Param(':qCommId') qCommId: number): Promise<Comment[]> {
    try {
      return await this.commentService.getAllComments(qCommId);
    } catch (error) {
      await this.commentService.handleError(error);
    }
  }

  @Get('/qCommId/userId')
  async getCommentsByUser(
    @Param(':qCommId') qCommId: number,
    @Param(':userId') userId: number,
  ): Promise<Comment> {
    try {
      return await this.commentService.getCommentByUser(qCommId, userId);
    } catch (error) {
      await this.commentService.handleError(error);
    }
  }

  @Post(':qCommId')
  async postComment(
    @Body() comment: Comment,
    @Param(':qCommId') qCommId: number,
  ): Promise<Comment> {
    try {
      const requiredFields: string[] = [
        'commentText',
        'totalValuations',
        'commId',
        'userId',
      ];
      const emptyFields: string[] = [];

      requiredFields.forEach((field: string): void => {
        if (!comment[field]) {
          emptyFields.push(field);
        }
      });

      if (emptyFields.length > 0) {
        throw new HttpException(
          `The fields ${emptyFields.values()} are empty`,
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.commentService.postNewComment(comment, qCommId);
    } catch (error) {
      await this.commentService.handleError(error);
    }
  }

  @Patch('/qCommId/commId')
  async editComment(
    @Body() comment: Partial<Comment>,
    @Param(':qCommId') qCommId: number,
  ): Promise<UpdateResult> {
    try {
      if (!qCommId || !comment) {
        throw new HttpException(
          'Either comment or community id is empty',
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.commentService.editComment(comment, qCommId);
    } catch (error) {
      await this.commentService.handleError(error);
    }
  }

  @Delete('/qCommId/commId')
  async deleteComment(
    @Param(':qCommId') qCommId: number,
    @Param(':commId') commId: number,
  ): Promise<DeleteResult> {
    try {
      if (!qCommId || !commId) {
        throw new HttpException(
          'Community ID and comment ID are either required',
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.commentService.deleteComment(qCommId, commId);
    } catch (error) {
      await this.commentService.handleError(error);
    }
  }
}
