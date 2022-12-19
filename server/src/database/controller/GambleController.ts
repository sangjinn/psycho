import { Request, Response } from "express";
import { Gamble } from "../../../../common/type/Gamble";
import { User } from "../../../../common/type/User";
import { GambleModel } from "../model/GambleModel";
import { UserModel } from "../model/UserModel";

export const GambleController = {
  getNewId: async () => {
    let maxId = Math.max(
      ...(await GambleModel.find().lean()).map((e) => {
        return +e.gambleId;
      })
    );
    console.log(maxId);
    return maxId + 1;
  },
  createGamble: async (req: Request, res: Response) => {
    console.log("createGamble");
    let gambleId: string = await (await GambleController.getNewId()).toString();
    console.log(`New id: ${gambleId}`);
    let newGamble: Gamble = {
      gambleId: gambleId,
      surveyId: req.body.surveyId,
      openTime: req.body.openTime,
      closeTime: req.body.closeTime,
      title: req.body.title,
      contents: {
        main: req.body.contents.main,
        options: req.body.contents.options,
      },
      betState: [
        {
          index: 0,
          name: req.body.contents.options[0].name,
          userCnt: 0,
          balance: 0,
          dividend: 0,
        },
        {
          index: 1,
          name: req.body.contents.options[1].name,
          userCnt: 0,
          balance: 0,
          dividend: 0,
        },
      ],
      result: req.body.result,
      answerIndex: req.body.answerIndex,
    };
    await GambleModel.create(newGamble);
    let filter = { gambleId: gambleId };
    res.status(200).json(await GambleModel.findOne(filter).lean<Gamble>());
  },
  updateById: async (req: Request, res: Response) => {
    console.log("updateById");
    let filter = { gambleId: req.params.id };
    await GambleModel.findOneAndUpdate(filter, req.body);
    res.status(200).json(await GambleModel.findOne(filter).lean<Gamble>());
  },
  removeById: async (req: Request, res: Response) => {
    console.log("removeById");
    let filter = { gambleId: req.params.id };
    await GambleModel.deleteOne(filter);
    res.status(200).json({});
  },
  findAll: async (req: Request, res: Response) => {
    res.status(200).json(await GambleModel.find({}).lean<Gamble[]>());
  },
  findById: async (req: Request, res: Response) => {
    let filter = { gambleId: req.params.id };
    res.status(200).json(await GambleModel.findOne(filter).lean<Gamble>());
  },
  bet: async (req: Request, res: Response) => {
    let filter = { userId: req.body.userid };
    let user: User = await UserModel.findOne(filter);
  },
  findOne: async (gambleId: string) => {
    let filter = { gambleId: gambleId };
    return await GambleModel.findOne(filter).lean<Gamble>();
  },
  findOneAndUpdate: async (gambleId: string, update: any) => {
    let filter = { gambleId: gambleId };
    await GambleModel.findOneAndUpdate(filter, update);
    return;
  },
  findOneAndDelete: async (gambleId: string) => {
    let filter = { gambleId: gambleId };
    await GambleModel.findOneAndDelete(filter);
    return;
  },
};
