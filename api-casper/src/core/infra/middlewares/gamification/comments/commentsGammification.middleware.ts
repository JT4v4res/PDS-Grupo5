import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CommentsGammificationMiddleware extends NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const commentId = req.params.commentId;

    try {
      const comment = await this.commentRepository.findOne(commentId);

      if (!comment) {
        return res.status(404).json({ message: 'Comment not found!' });
      }

      if (!comment.valuation) {
        comment.valuation += 30;

        next();
      }

      let community = null;

      comment.comm == 'teacher'
        ? (community = await this.professorRepository.findOne(comment.commId))
        : (community = await this.materiaRepository.findOne(comment.commId));

      if (
        comment.totalValuations >= community.totalMembers * 0.5 &&
        comment.totalValuations < community.totalMembers * 0.8
      ) {
        comment.valuation += 15;
      } else if (comment.totalValuations >= community.totalMembers * 0.8) {
        comment.valuation += 15;
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error searching comment' });
    }

    next();
  }
}
