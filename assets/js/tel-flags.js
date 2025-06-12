const input = document.querySelector("#cs-whatsapp");
window.intlTelInput(input, {
    initialCountry: "ve",
    onlyCountries: ["ve", "ar", "us"],
    preferredCountries: ["ve"],
    separateDialCode: true,
    nationalMode: true,
    autoPlaceholder: "polite",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
});
input.addEventListener("input", () => {
    const countryCode = iti.getSelectedCountryData().dialCode;
    const e164Number = iti.getNumber();
    if (e164Number) {
        const formattedNumber = intlTelInputUtils.formatNumber(e164Number, iti.getSelectedCountryData().iso2, intlTelInputUtils.numberFormat.NATIONAL);
        if (formattedNumber && formattedNumber !== input.value) {
            input.value = formattedNumber;
        }
    }
});