export const exerciseOption = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "48fbd7932cmshbb1081fd9df6b26p1da5c4jsn72ae37a434a7",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

export const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "98b7267cd9mshb61d41e77365525p13a025jsn73d77a6e1c2d",
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};
