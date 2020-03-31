// Structure Diagram


export const ApiService = {
    get: function(url){
        return new Promise( resolve => {
            fetch(url)
            .then( response => response.json() )
            .then( response => {
                console.log('got results')
                if(response.fault){
                    console.log(response.fault.faultstring)
                }else{
                    return resolve(response)
                }
            })         
        });
    }
}

export const ArticleService = {
    trimTitle: function(title){
        let string = title;  
        let length = 35;
        let trimmedString = string.substring(0, length); 

        return trimmedString;
    },
    trimAuthor: function(author){
        let string = author
        if(string == null){
            return "Author unknown"
        }else{
            const res = string.split(",")
            return res[0]
        }
    },
    formatDate: function (date) {
        let str = date;
        let month = ""
        let day = ""

        str = str.replace("T","-")

        const res = str.split("-");
        const monthNumberValue = parseInt(res[1])
        const dayNumberValue = parseInt(res[2])

        switch (dayNumberValue)
            {
            case 1:
                day = dayNumberValue + 'st'
                break;
            case 2:
                day = dayNumberValue + 'nd'
                break;
            case 3:
                day = dayNumberValue + 'rd'
                break;
            case 4:
                day = dayNumberValue + 'th'
                break;    
            case 5:
                day = dayNumberValue + 'th'
                break;    
            case 6:
                day = dayNumberValue + 'th'
                break; 
            case 7:
                day = dayNumberValue + 'th'
                break;
            case 8:
                day = dayNumberValue + 'th'
                break;
            case 9:
                day = dayNumberValue + 'th'
                break;
            case 10:
                day = dayNumberValue + 'th'
                break;
            case 11:
                day = dayNumberValue + 'th'
                break;
            case 12:
                day = dayNumberValue + 'th'
                break;
            case 13:
                day = dayNumberValue + 'th'
                break;
            case 14:
                day = dayNumberValue + 'th'
                break;
            case 15:
                day = dayNumberValue + 'th'
                break;
            case 16:
                day = dayNumberValue + 'th'
                break;
            case 17:
                day = dayNumberValue + 'th'
                break;
            case 18:
                day = dayNumberValue + 'th'
                break;
            case 19:
                day = dayNumberValue + 'th'
                break;
            case 20:
                day = dayNumberValue + 'th'
                break;
            case 21:
                day = dayNumberValue + 'st'
                break;
            case 22:
                day = dayNumberValue + 'nd'
                break;
            case 23:
                day = dayNumberValue + 'rd'
                break;
            case 24:
                day = dayNumberValue + 'th'
                break;
            case 25:
                day = dayNumberValue + 'th'
                break;
            case 26:
                day = dayNumberValue + 'th'
                break;
            case 27:
                day = dayNumberValue + 'th'
                break;
            case 28:
                day = dayNumberValue + 'th'
                break;
            case 29:
                day = dayNumberValue + 'rd'
                break;
            case 30:
                day = dayNumberValue + 'th'
                break;
            case 31:
                day = dayNumberValue + 'st'
                break;
            default:  
            }
  
        switch (monthNumberValue)
            {
            case 1:
                month = 'Jan'
                break
            case 2:
                month = 'Feb'
                break
            case 3:
                month = 'March'
                break
            case 4:
                month = 'April'
                break
            case 5:
                month = 'May'
                break
            case 6:
                month = 'June'
                break
            case 7:
                month = 'July'
                break
            case 8:
                month = 'Aug'
                break
            case 9:
                month = 'Sept'
                break
            case 10:
                month = 'Oct'
                break
            case 11:
                month = 'Nov'
                break
            case 12:
                month = 'Dec'
                break
            }

        return month + " " + day
    }
}
