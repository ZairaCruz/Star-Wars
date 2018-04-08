export class Filme {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: any[];

    constructor(title: string = null,
        episode_id: string = null,
        opening_crawl: string = null,
        director: string = null,
        producer: string = null,
        release_date: string = null,
        characters: any[] = []) {

    }
}