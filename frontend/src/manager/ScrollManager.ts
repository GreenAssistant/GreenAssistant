
export function updateScroll(id: string) {
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
        element.scrollTop = element.scrollHeight;
    }
}
