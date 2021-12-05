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
        this.dateScore = this.dateScore();
    }
    
    dateScore() {
        let months = ['placeholder', 'January', 'February', 
        'March', 'April', 'May', 'June', 'July', 'August', 
        'September','October', 'November', 'December'];
    
        let parsedDate = this.date.split(' ');
        let strMonth = String(months.findIndex(num => num === parsedDate[0]));
        if (strMonth.length === 1) strMonth = '0' + strMonth;
        let strDay = parsedDate[1].substring(0, parsedDate[1].length - 1);
        if (strDay.length === 1) strDay = '0' + strDay;
        let dateScore = parsedDate[2] + strMonth + strDay;
        return parseInt(dateScore);          
    }
}