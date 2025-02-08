export const SendRequest = async (jsonString: string) => {
  const response = await fetch("http://localhost:8000/api/household/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonString,
  });

  return response;
};
