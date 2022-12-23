# Sample library of CrawliX plugins

This repository contains several examples of plugins, that can be used directly, or as usage samples to create your own

## Creating a crawler from a existing plugin
It's possible to reuse most of the library plugins without any change, just by following the example below:

```
curl -s -X POST http://localhost:8079/crawlix/default/install-plugins \
      --header "Content-Type: application/json" \
      --header "Authorization: 00-DEFAULT-TOKEN-00" \
      --data-binary @- <<EOF
[
    {
        "key": "reddit-linux",
        "defaultURL": "https://www.reddit.com/r/linuxquestions/",
        "scriptURL": "https://raw.githubusercontent.com/kynerix/crawlix-lib/main/plugins/reddit.js",
        "status" : "DISABLED"
    }
]   
EOF
```

## Start developing a new JS plugin

You can follow the next steps:

1. Open your local browser.
2. Navigate to the page you want to parse or extract data from.
3. Open the browser's Javascript console and paste the following JS snippet:

```
(function(d, script) {
script = d.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.src = 'http://localhost:8079/crawlix/javascript';
d.getElementsByTagName('head')[0].appendChild(script);
}(document));
```

4. Start using the **crawlix** object to parse the loaded content.
