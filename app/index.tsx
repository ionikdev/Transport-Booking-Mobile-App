import React, { useEffect, useState } from "react";
import { Redirect, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "@/utils/Loading";

const AuthHandler = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("ACCESS_TOKEN");
        if (token) {
          setIsAuthenticated(true);
        }
      } catch (e) {
        // Handle error, e.g., logging
      }
      setIsLoading(false);
    };

    checkToken();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return isAuthenticated ? (
    <Redirect href="/dashboard" />
  ) : (
    // router.push("(tabs)/home")
    <Redirect href="/ukkoair" />
  );
};

//   useEffect(() => {
//     if (!isLoading) {
//       if (isAuthenticated) {
//         router.replace("/dashboard");
//         // <Redirect href="/dashboard" />;
//       } else {
//         <Redirect href="/login" />;
//       }
//     }
//   }, [isLoading, isAuthenticated, router]);

//   if (isLoading) {
//     return <Loading />;
//   }

//   return null;
// };

export default AuthHandler;
