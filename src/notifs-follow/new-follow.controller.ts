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
        console.log("________________________________");
        console.log("post req params", req.params);
        console.log("________________________________");
        console.log("post req body", req.body);
        console.log("________________________________");
        res.status(200).send('Notifs follow Post callback');
    }
}