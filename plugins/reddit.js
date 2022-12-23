// https://www.reddit.com/
crawlix
.begin()
    // Parse contents
    .blocksParser("div.Post", block => {
        return block.innerText.indexOf("Promoted") == -1 &&
               block.innerText.indexOf("PINNED") == -1
    })
        .select("title", "h3")
        .select("url", "a[data-click-id='comments']", "href")
        .select("summary", "a[data-click-id='body'].undefined")
    .parse()
    
    // Updates fixed values for all contents
    .setValues("type", "reddit")
    .removeIfEmpty("summary")
    
    // Add contents
    .addContents()
    .assertMinContentCount(5)
.end()
