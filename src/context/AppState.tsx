import { useState } from "react";
import AppContext from "./AppContext";

const AppState = (props: any) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<any>(false);
  const [isLoading, setIsLoading] = useState<any>(true);
  const [selectedCountry, setSelectedCountry] = useState<any>([]);
  const [selectedEmail, setSelectedEmail] = useState<any>([]);
  const [selectedLanguageSpoken, setSelectedLanguageSpoken] = useState<any>([]);
  const [selectedRS, setSelectedRS] = useState<any>([]);
  const [selectedSkillAssessmentScore, setSelectedSkillAssessmentScore] =
    useState<any>([]);
  const [selectedTicketStatus, setSelectedTicketStatus] = useState<any>([]);
  const [RSFilter, setRSFilter] = useState<any>([]);

  const LogOutUser = () => {
    // queryCache.clear();

    localStorage.clear();
    localStorage.clear();
    // setselectedTeamLeads([])
    // setselectedCSM([])
    // setselectedOM([])
    // setselectedAgents([])
    // setSelectedRTM([])
    // setSelectedClients([])
    window.location.reload();
    console.log("Logging Out");

    // setlogin(false);
  };

  return (
    <AppContext.Provider
      value={{
        LogOutUser,
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        setIsLoading,
        selectedCountry,
        setSelectedCountry,
        selectedEmail,
        setSelectedEmail,
        selectedLanguageSpoken,
        setSelectedLanguageSpoken,
        selectedRS,
        setSelectedRS,
        selectedSkillAssessmentScore,
        setSelectedSkillAssessmentScore,
        selectedTicketStatus,
        setSelectedTicketStatus,
        RSFilter,
        setRSFilter,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
