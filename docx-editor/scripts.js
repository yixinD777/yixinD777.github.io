// 预览按钮的功能：将 .docx 文件转换为 HTML 并显示在网页上
document.getElementById('previewButton').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(event) {
            mammoth.convertToHtml({arrayBuffer: event.target.result})
                .then(function(result) {
                    document.getElementById('docPreview').innerHTML = result.value;
                })
                .catch(function(err) {
                    console.error('Error:', err);
                });
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert('请先选择一个文件。');
    }
});

// 保存按钮的功能：将编辑后的内容保存为新的 .docx 文件
document.getElementById('saveButton').addEventListener('click', function() {
    var updatedContent = document.getElementById('docPreview').innerHTML;
    var fileName = document.getElementById('fileNameInput').value || 'edited.docx'; // 获取用户输入的文件名，默认值为 'edited.docx'

    // 创建一个完整的 HTML 文档
    const fullHtmlContent = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            </head>
            <body>
                ${updatedContent}
            </body>
        </html>
    `;

    // 使用 html-docx-js 将 HTML 转换为 Word 文档的 Blob 对象
    const converted = htmlDocx.asBlob(fullHtmlContent);

    // 使用 file-saver 保存 Blob 对象为 Word 文档文件
    saveAs(converted, fileName);
});
