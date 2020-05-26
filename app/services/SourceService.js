
export const SourceService = {
    trimURL: function(path){
        let url = path;
        let urlParts = url.replace('http://','').replace('https://','').split(/[/?#]/);
        let domain = urlParts[0];
        if(domain == 'news.google.com'){
            domain = 'googleedge.com'
        }else if(domain == 'espn.go.com'){
            domain = 'espn.com'
        }else if(domain == 'abcnews.go.com'){
            domain = ''
        }
        domain = domain.replace('www.','')
        return domain     
    },
    trimURLSource: function(path){
        let url = path;
        let urlParts = url.replace('http://','').replace('https://','').split(/[/?#]/);
        let domain = urlParts[0];
        if(domain == 'espn.go.com'){
            domain = 'espn.com'
        }
        domain = domain.replace('www.','')
        return domain     
    }
}