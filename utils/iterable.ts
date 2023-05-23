export function iterable(content: any) {
    let currentPosition = 0;

    return function getNextContent(goToNextPosition: boolean = false) {
        return goToNextPosition ? content[++currentPosition] : content[currentPosition]
    };
}

export function stripHTML(content: String){
    return content.replace(/<\/?[^>]+(>|$)/g, "");
}