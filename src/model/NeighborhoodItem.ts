export default class NeighborhoodItem {
    constructor(
        readonly id: string,
        readonly state: string,
        readonly regionName: string,
        readonly thumbnailUrl: string,
        readonly intro: string,
        readonly map: any,
        readonly attribute: string,
        readonly slogan: string,
        readonly sloganMore: string,
        readonly whatToExpect: string,
        readonly whatToExpectMore: string,
        readonly lifeStyle: string,
        readonly lifeStyleMore: string,
        readonly unexpectedAppeal: string,
        readonly unexpectedAppealDetail: string,
        readonly market: string,
        readonly marketDetail: string,
        readonly fallInLoveWith: string,
        readonly fallInLoveWithDetail: string
    ) {
    }
}