# First Need to Select Image , then Right Click and Copy > Copy All listed HAR
# Then in console let har = paste (what i copied)
# Then har()
# Then  
var imageUrls = [];
har.log.entries.forEach(function (entry) {
  if (entry.response.content.mimeType.indexOf("image/") !== 0) return;
  imageUrls.push(entry.request.url);
});
console.log(imageUrls.join('\n'));
