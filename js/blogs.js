function submitBlog() {
    alert("Successfully submitted");
    var creationRow = document.getElementById('newBlogRow');
    var tld = document.getElementById('topLevelContainer');
    var author = document.getElementById('inputAuthor').value.trim();
    var title = document.getElementById('inputTitle').value.trim();
    var summary = document.getElementById('summary').value.trim();
    var content = document.getElementById('content').value.trim();

    if (author!="" && title!="" && summary!="" && content!="") {
        console.log('its good');
        creationRow.innerHTML = "";
        var newRow = document.createElement('div');
        newRow.className='row mb-5';
        newRow.innerHTML = `
        <div class="col-lg-2"></div>
        <div class="col-lg-6 blogPost">
            <div class="row">
                <div class="col-lg-6">
                    <p class="blogTitle">${title}</p>
                </div>
                <div class="col-lg-6">
                    <p class="blogAuthor">${author}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 blogSummaryDiv">
                    <hr>
                    <p class="blogSummary">${summary}
                    </p>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 blogContentDiv">
                <p class="blogContent">
                    ${content}
                </p>
                </div>
            </div>
        </div>`
        tld.appendChild(newRow);
    } else {
        console.log('its no bueno');
    }


}



function createBlog() {
    alert('Create blog');
    var creationRow = document.getElementById('newBlogRow');
    console.log(creationRow.innerHTML);
    creationRow.innerHTML = `<div class="col-lg-2">
    </div>
    <div class="col-lg-6 blogDiv">
        <!------------------START OF FORM DIV------------>
        <div class="myForm" style="text-align: center">
          <form>
            <h3 style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; letter-spacing: 2px;">New Post</h4>
            <div class="form-row topRow">
              <div class="form-group col-md-3nb align-center">
                <label for="inputTitle">Title</label>
                <input type="text" class="form-control" id="inputTitle" placeholder="Title">
              </div>
              <div class="form-group col-md-3 align-center">
                <label for="inputAuthor">Author</label>
                <input type="text" class="form-control" id="inputAuthor" placeholder="Author">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group messageForm">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group messageForm">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group messageForm align-center">
                <label for="summary">Summary</label>
                <textarea name="summary" id="summary" class="form-control textarea"></textarea>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group messageForm">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group messageForm">
              </div>
            </div>
            <div class="form-row" style="padding-bottom: 10px;">
              <div class="form-group messageForm align-center">
                <label for="content">Post Content</label>
                <textarea name="content" id="content" class="form-control textarea"></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" style="padding-top: 5px" onclick="submitBlog()">Submit</button>
          </form>
        </div>
        <!--------------------END OF FORM DIV-------------->
      </div>
    </div>`
}