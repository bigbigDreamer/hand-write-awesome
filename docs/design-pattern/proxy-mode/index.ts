const boardTicket = {
    title: '',
    location: '',
    companyName: ''
}

const ticketProxy = new Proxy(boardTicket, {
    get(target: { companyName: string; location: string; title: string }, p: string | symbol, receiver: any): any {
        if(p === 'title') {
            return target.title + '-' + target.companyName;
        }
        return target[p];
    }
});

ticketProxy.companyName = "极羽";
ticketProxy.title = '两箱黄金';
ticketProxy.location = '墨西哥';

console.log(Reflect.get(ticketProxy, 'title'));

function preloadImage(imgNode) {
    return {
        setSrc(targetUrl) {
            imgNode.src = preloadImage.defaultUrl;
            const image = new Image();

            image.onload = function () {
                imgNode.src = targetUrl;
            }
            image.src = targetUrl;
        }
    }
}
preloadImage.defaultUrl = 'xxx';

preloadImage(document.querySelector('img')).setSrc("www.baidu.com/sshxhx.jpg");

