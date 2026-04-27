export class Video {
    constructor(id: number, title: string, subtitle: string, url: string, height: number, width: number) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.url = url;
        this.height = height;
        this.width = width;
    }

    id: number;
    title: string;
    subtitle: string;
    url: string;
    height: number;
    width: number;
}
