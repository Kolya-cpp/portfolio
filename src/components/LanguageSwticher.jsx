function LanguageSwticher({ language, setLanguage }) {
    return (
        <div className="language-switcher">
            <button
                className={language === "ua" ? "active" : ""}
                onClick={() => setLanguage("ua")}
            >
                UA
            </button>

            <button
                className={language === "en" ? "active" : ""}
                onClick={() => setLanguage("en")}
            >
                EN
            </button>
        </div>
    );
}

export default LanguageSwticher;