import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async (
  currentpage: any,
  LogOutUser: any,
  selectedCountry: any,
  selectedEmail: any,
  selectedLanguageSpoken: any,
  selectedRS: any,
  selectedSkillAssessmentScore: any
) => {
  try {
    const token = localStorage.getItem("talentPOP_ML_App_Token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to Authorization header
      },
    };

    const selectedCountryProps =
      selectedCountry.length > 0
        ? selectedCountry?.map((item: any) => `&country=${item}`)
        : [];
    const selectedEmailProps =
      selectedEmail.length > 0
        ? selectedEmail?.map((item: any) => `&email=${item}`)
        : [];
    const selectedLanguageSpokenProps =
      selectedLanguageSpoken.length > 0
        ? selectedLanguageSpoken?.map((item: any) => `&language_spoken=${item}`)
        : [];
    const selectedRSProps =
      selectedRS.length > 0
        ? selectedRS?.map((item: any) => `&rs=${item}`)
        : [];
    const selectedSkillAssessmentScoreProps =
      selectedSkillAssessmentScore.length > 0
        ? selectedSkillAssessmentScore?.map(
            (item: any) => `&skill_assessment_score=${item}`
          )
        : [];

    const url = `${
      import.meta.env.VITE_BACKEND_BASE_URL
    }/reports/aga-table?page=${currentpage}&page_size=10${selectedCountryProps?.join(
      ""
    )}${selectedEmailProps?.join("")}${selectedLanguageSpokenProps?.join(
      ""
    )}${selectedRSProps?.join("")}${selectedSkillAssessmentScoreProps?.join(
      ""
    )}`;

    const resp = await axios.get(url, config);
    console.log("resp.data", resp.data);
    console.log("resp.data", resp);

    return resp.data;
  } catch (error: any) {
    console.log("error", error.status);
    if (error.status == 401) {
      console.log("LogOut");
      LogOutUser();
    }
  }
};

export const useFetchAGATableData = (
  currentpage: any,
  sortBy: any,
  sortOrder: any
) => {
  const {
    LogOutUser,
    selectedCountry,
    selectedEmail,
    selectedLanguageSpoken,
    RSFilter,
    selectedSkillAssessmentScore,
  } = useContext(AppContext);

  return useQuery({
    queryKey: [
      "analytics-aga-table",
      currentpage,
      sortBy,
      sortOrder,
      selectedCountry,
      selectedEmail,
      selectedLanguageSpoken,
      RSFilter,
      selectedSkillAssessmentScore,
    ],
    queryFn: () =>
      getData(
        currentpage,
        LogOutUser,
        selectedCountry,
        selectedEmail,
        selectedLanguageSpoken,
        RSFilter,
        selectedSkillAssessmentScore
      ),
    enabled: !!currentpage,
  });
};
