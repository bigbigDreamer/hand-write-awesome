function virtualDownload({ url, name }) {
    if (!url) {
        throw new Error("Url 不能为空");
    }
    const virtualDom = document.createElement('a');
    virtualDom.download = name;
    virtualDom.href = url;
    virtualDom.style.display = "none";
    document.body.appendChild(virtualDom);

    return () => document.body.removeChild(virtualDom);
}
