export const SUPPORTED_LANGUAGE = [
    {
        identifier: "english",
        name: "English"
    },
    {
        identifier: "marathi",
        name: "मराठी"
    },
    {
        identifier: "hindi",
        name: "हिंदी"
    },
    {
        identifier: "russian",
        name: "Русский"
    },
    {
        identifier: "japanese",
        name: "日本語"
    },
    
];

const lang = {
    english: {
        search: "Search",
        gptSearchPlaceholder: "What would you like to watch today?"
    },
    hindi: {
        search: "खोज",
        gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?"
    },
    marathi: {
        search: "शोध",
        gptSearchPlaceholder: "तुम्हाला आज काय बघायला आवडेल?"
    },
    russian: {
        search: "Поиск",
        gptSearchPlaceholder: "Что бы вы хотели посмотреть сегодня?"
    },
    japanese: {
        search: "検索",
        gptSearchPlaceholder: "今日は何を見たいですか？"
    }
};

export default lang;