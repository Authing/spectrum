// @flow
import { Router } from 'express';
import twitterAuthRoutes from './twitter';
import facebookAuthRoutes from './facebook';
import googleAuthRoutes from './google';
import githubAuthRoutes from './github';
import AuthingGithubAuthRoutes from './authing-github';
import AuthingWxappAuthRoutes from './authing-wxapp';
import logoutRoutes from './logout';

const authRouter = Router();

authRouter.use('/twitter', twitterAuthRoutes);
authRouter.use('/facebook', facebookAuthRoutes);
authRouter.use('/google', googleAuthRoutes);
authRouter.use('/github', githubAuthRoutes);
authRouter.use('/authing.github', AuthingGithubAuthRoutes);
authRouter.use('/authing.wxapp', AuthingWxappAuthRoutes);
authRouter.use('/logout', logoutRoutes);

export default authRouter;
