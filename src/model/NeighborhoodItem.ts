export default class NeighborhoodItem {
  readonly id: string;
  readonly state: string;
  readonly regionName: string;
  readonly thumbnailUrl: string;
  readonly intro: string;
  readonly map: string;
  readonly attribute: string;
  readonly slogan: {
    title: string;
    content: string;
    images: string[];
  };
  readonly whatToExpect: {
    title: string;
    content: string;
    images: string[];
  };
  readonly lifeStyle: {
    title: string;
    content: string;
    images: string[];
  };
  readonly unexpectedAppeal: {
    title: string;
    content: string;
    images: string[];
  };
  readonly market: {
    title: string;
    content: string;
    images: string[];
  };
  readonly fallInLoveWith: {
    title: string;
    content: string;
    images: string[];
  };
  constructor(
    id: string,
    state: string,
    regionName: string,
    thumbnailUrl: string,
    intro: string,
    map: any,
    attribute: string,
    sloganTitle: string,
    sloganContent: string,
    sloganImages: string[],
    whatToExpectTitle: string,
    whatToExpectContent: string,
    whatToExpectImages: string[],
    lifeStyleTitle: string,
    lifeStyleContent: string,
    lifeStyleImages: string[],
    unexpectedAppealTitle: string,
    unexpectedAppealContent: string,
    unexpectedAppealImages: string[],
    marketTitle: string,
    marketContent: string,
    marketImages: string[],
    fallInLoveWithTitle: string,
    fallInLoveWithContent: string,
    fallInLoveWithImages: string[]
  ) {
    this.id = id;
    this.state = state;
    this.regionName = regionName;
    this.thumbnailUrl = thumbnailUrl;
    this.intro = intro;
    this.map = map;
    this.attribute = attribute;
    this.slogan = {
      title: sloganTitle,
      content: sloganContent,
      images: sloganImages,
    };
    this.whatToExpect = {
      title: whatToExpectTitle,
      content: whatToExpectContent,
      images: whatToExpectImages,
    };
    this.lifeStyle = {
      title: lifeStyleTitle,
      content: lifeStyleContent,
      images: lifeStyleImages,
    };
    this.unexpectedAppeal = {
      title: unexpectedAppealTitle,
      content: unexpectedAppealContent,
      images: unexpectedAppealImages,
    };
    this.market = {
      title: marketTitle,
      content: marketContent,
      images: marketImages,
    };
    this.fallInLoveWith = {
      title: fallInLoveWithTitle,
      content: fallInLoveWithContent,
      images: fallInLoveWithImages,
    };
  }
}
