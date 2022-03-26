class UI {
  static addWord(paragraphArray, paragraphCounter) {
    const PARAGRAPH_TAG = "p";
    const SPAN_TAG = "s";
    const BODY_ID = "bodyElement";
    

    const id = PARAGRAPH_TAG + paragraphCounter;
    const word = paragraphArray[paragraphCounter].replace(/ /g, "");
    const body = document.getElementById(BODY_ID);

    body.innerHTML += `<hr> <div class="paragraph-background">
    <p  id="${id}"  href="#${id}" class="h1 px-3" style="font-size: 300%;  display:block;"> </p>
    </div> `;

    const paragraphLocation = document.getElementById(id);
    for (var i = 0; i < word.length; i++) {
      paragraphLocation.innerHTML += `<span name="${i}" tag="span" id="${id + SPAN_TAG + i}" style="margin-right:2px;">${word[i]}</span>`;
    }

    if (paragraphCounter + 1 < paragraphArray.length) 
    this.addWord(paragraphArray, paragraphCounter + 1);
  }

  static removeSeparator(id) {
    const SECOND_CHILD = 1;
    const separator = document.getElementById(id);
    separator.childNodes[SECOND_CHILD].remove();
  }

  static addSeparator(newSeparatorPosition) {
    newSeparatorPosition.innerHTML += `<span id="separator" class="separator"></span>`;
  }
}
