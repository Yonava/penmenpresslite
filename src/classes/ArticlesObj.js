export default class Articles {
    constructor(title, image, imageCaption, category, author, date, content, saved) {
        this.title = title;
        this.image = image;
        this.imageCaption = imageCaption;
        this.category = category;
        this.author = author;
        this.date = date;
        this.content = content;
        this.saved = false;
    }
}