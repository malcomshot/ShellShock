export class Video {
    constructor(id: number, title: string, subtitle: string, url: string, style: VideoButtonStyle, buttonDestination: string, height: number, width: number) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.url = url;
        this.style = style;
        this.buttonDestination = buttonDestination;
        this.height = height;
        this.width = width;
    }

    id: number;
    title: string;
    subtitle: string;
    url: string;
    style: VideoButtonStyle;
    buttonDestination: string;
    height: number;
    width: number;
}

export enum VideoButtonStyle {
    Icon = "icon",
    Text = "text"
}
