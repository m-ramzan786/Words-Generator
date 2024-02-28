const input = document.getElementById("NumOfWords");
const textarea = document.getElementById("textarea");
const generateBtn = document.getElementById("generate-Btn");
const copyBtn = document.getElementById("copy-Btn");
const resetBtn = document.getElementById("reset-Btn");
const totalWordsCount = document.getElementById('total-words');
const character = document.getElementById('char');
const characterNoSpace = document.getElementById('char-no-space');

const generateWord = (NumOfWords) => {
    let text = "";
    const words = "loremipsumdolorsitametconsecteturadipisicingelitatquesimiliqueenimvoluptatesidoptionobisminimavoluptatibusnemolaboreducimusrepudiandaeliberonisiquasminusrationequaeratcorporisrepellatbeatae"
    for (let i = 0; i < NumOfWords; i++) {
        const random = (Math.random() * (words.length - 1)).toFixed(0)
        text += words[random];
    }
    return text
}

generateBtn.addEventListener("click", () => {
    const NumOfWords = Number(input.value);

    let data = "";
    for (let i = 0; i < NumOfWords; ++i) {
    const randomNum = (Math.random()*15).toFixed();
    //    data += (generateWord(randomNum)).toLowerCase()
       data += generateWord(randomNum);
    if (i < NumOfWords - 1) {
        data += " ";
    } else {
        data += "";
    }
}

    textarea.innerHTML = data;

    wordCount();
    charCount();
    charCountNoSpace();
})

copyBtn.addEventListener("click", () => {
    textarea.select();
    document.execCommand("copy");
})

resetBtn.addEventListener("click", () => {
    input.value = "";
    textarea.innerHTML = "";
    totalWordsCount.innerText = "0";
    character.innerText = "0";
    characterNoSpace.innerText = "0";
})

const wordCount = () => {
    const totalWords = textarea.value;
    const words = totalWords.split(' ');
    totalWordsCount.innerText = words.length;
}
const charCount = () => {
    const totalWords = textarea.value;
    character.innerText = totalWords.length;
}

const charCountNoSpace = () => {
    const totalWords = textarea.value;
    let remSpace = totalWords.replace(/\s/g, "")
    characterNoSpace.innerText = remSpace.length
}




