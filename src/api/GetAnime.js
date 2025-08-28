const GetAnime = async () => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return {
      success: true,
      data: data.data,
    };
  } catch (err) {
    console.error(`Error fetching: `, err);
    return {
      success: false,
      data: [] || null,
    };
  }
};

export default GetAnime;
