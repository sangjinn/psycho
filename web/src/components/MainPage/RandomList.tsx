import { getNewsletterList } from "./NewsletterList";

export type RandomType = {
  type: string;
  data: [];
};

export const getRandomList = (): RandomType[] => {
  return RandomList;
};

export const RandomList: RandomType[] = [];

export function RandomListInit() {
  console.log("RandomListInit.........");
  let NewsletterList: any[] = [];
  NewsletterList = getNewsletterList();
  RandomList.push({ type: "changembti", data: [] });
  RandomList.push({ type: "hashtagsearchresult", data: [] });
  for (let i = 0; i < NewsletterList.length; i++) {
    console.log("NewsletterList..........", NewsletterList[i]);
    RandomList.push({ type: "newsletter", data: NewsletterList[i] });
  }
}