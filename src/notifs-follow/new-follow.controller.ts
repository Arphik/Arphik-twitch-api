import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('new-follow')
export class NewFollowController {
    @Get()
    followGet(@Res() res: Response){
        console.log("get");
        res.status(200).send('Notifs follow GET callback');
    }
    @Post()
    followPost(@Req() req:  Request, @Res() res: Response) {
        console.log("post req", req);
        res.status(200).send('Notifs follow Post callback');
    }
}