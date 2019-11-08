import React from "react";

// InternationalizationContext will hold i18n data (very basic, honestly)
// For infrequent data changes, otherwise, maybe Redux?
// Context changes refresh all child Components
const InternationalizationContext = React.createContext();

export default InternationalizationContext;
