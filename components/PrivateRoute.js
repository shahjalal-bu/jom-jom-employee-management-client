"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { currentUser, loading } = useAuth();
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (!currentUser && !loading) {
      router.push("/login");
    } else {
      setPageLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (pageLoading) {
    return <div>Loading...</div>;
  }
  return !pageLoading && children;
};

export default PrivateRoute;
