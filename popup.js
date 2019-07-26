fetch("http://pi.hole/admin/api.php?summaryRaw")
    .then(res => res.json())
    .then(json => {
        document.getElementById("ads_percentage_today").innerText = Math.round(json.ads_percentage_today * 10) / 10 + "%";
        document.getElementById("dns_queries_today").innerText = json.dns_queries_today.toLocaleString('nl-NL');
        document.getElementById("ads_blocked_today").innerText = json.ads_blocked_today.toLocaleString('nl-NL');
    });