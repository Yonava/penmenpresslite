export default class Articles {
    constructor(title, image, imageCaption, category, author, date, content) {
        this.title = title;
        this.image = image;
        this.imageCaption = imageCaption;
        this.category = '_' + category; // putting an _ in search will be bound strictly to category
        this.author = author;
        this.date = date;
        this.content = content;
        this.saved = false;
    }
}