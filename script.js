async function searchUser() {

  const username =
    document.getElementById("searchInput").value;

  const response =
    await fetch(`https://api.github.com/users/${username}`);

  const data = await response.json();

  const profile = document.getElementById("profile");

  if (data.message === "Not Found") {
    profile.innerHTML = "<p>User not found</p>";
    return;
  }

  profile.innerHTML = `
    <div class="profile-card">
      <img src="${data.avatar_url}" width="120">
      <h2>${data.name}</h2>
      <p>${data.bio || "No bio available"}</p>
      <p>Followers: ${data.followers}</p>
      <p>Public repos: ${data.public_repos}</p>
      <a href="${data.html_url}" target="_blank">
        View Profile
      </a>
    </div>
  `;
}
