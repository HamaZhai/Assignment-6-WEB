$(document).ready(function () {
    console.log("jQuery is ready!");

    $("h1").css("letter-spacing", "-0.03em");
    $(".personal-headline").css("font-weight", "bold");
    $("p.intro").css("max-width", "48rem");
    let showingGitHub = true;
    let skillsExpanded = false;

    function updateGreeting() {
        const name = $("#profile-name").text();
        if (name === "Your developer profile") {
            $("#hub-greeting").text("Welcome to my game development workspace.");
        } else {
            $("#hub-greeting").text("Welcome, " + name + ". Let's build something playable.");
        }
    }

    function applyTheme(light) {
        if (light) {
            $("body").addClass("hub-light").css({"background-color": "#eef2f6", "color": "#172432"});
            $("#light-theme").attr("aria-pressed", "true");
            $("#dark-theme").attr("aria-pressed", "false");
        } else {
            $("body").removeClass("hub-light").css({"background-color": "#11161d", "color": "#edf1f5"});
            $("#light-theme").attr("aria-pressed", "false");
            $("#dark-theme").attr("aria-pressed", "true");
        }
    }

    function useLightTheme() { applyTheme(true); }
    function useDarkTheme() { applyTheme(false); }

    function hideAbout() { $("#journal-about").hide(); }
    function showAbout() { $("#journal-about").show(); }
    function toggleAbout() { $("#journal-about").toggle(); }

    function fadeInGallery() { $(".inspiration-image").stop(true, true).fadeIn(300); }
    function fadeOutGallery() { $(".inspiration-image").stop(true, true).fadeOut(300); }
    function fadeToggleGallery() { $(".inspiration-image").stop(true, true).fadeToggle(300); }

    function toggleInterest() {
        const panelId = $(this).attr("aria-controls");
        const expanded = $(this).attr("aria-expanded") === "true";
        $("#" + panelId).stop(true, true).slideToggle(250);
        $(this).attr("aria-expanded", !expanded);
    }

    function expandInterests() {
        $(".interest-panel").stop(true, true).slideDown(250);
        $(".interest-toggle").attr("aria-expanded", "true");
    }

    function collapseInterests() {
        $(".interest-panel").stop(true, true).slideUp(250);
        $(".interest-toggle").attr("aria-expanded", "false");
    }

    function showSkillInputError() {
        $("#skill-message").text("Enter a technical skill of 1-50 characters, including a non-space character.").attr("data-state", "error");
    }

    function resetSkillMessage() {
        $("#skill-message").text("Add your next technical skill.").attr("data-state", "ready");
    }

    function insertSkill(atStart) {
        const value = $("#skill-input").val().trim();
        if (value === "" || value.length > 50) {
            showSkillInputError();
            return;
        }
        const item = document.createElement("li");
        $(item).text(value);
        if (atStart) {
            $("#skill-list").prepend(item);
        } else {
            $("#skill-list").append(item);
        }
        $("#skill-input").val("");
        $("#skill-message").text("Skill added to your toolkit.").attr("data-state", "ready");
    }

    function addSkill(event) {
        event.preventDefault();
        insertSkill(false);
    }

    function prependSkill() { insertSkill(true); }

    function removeSkill() {
        if ($("#skill-list li").length === 0) {
            $("#skill-message").text("Your toolkit is already empty.").attr("data-state", "ready");
            return;
        }
        $("#skill-list li:last").remove();
        $("#skill-message").text("Last skill removed.").attr("data-state", "ready");
    }

    function switchSocialLink() {
        if (showingGitHub) {
            $("#social-link").attr("href", "https://hamazhai.itch.io/").text("itch.io / HamaZhai");
            $("#social-platform").text("itch.io");
            $("#switch-platform").text("Switch to GitHub");
            showingGitHub = false;
        } else {
            $("#social-link").attr("href", "https://github.com/HamaZhai").text("GitHub / HamaZhai");
            $("#social-platform").text("GitHub");
            $("#switch-platform").text("Switch to itch.io");
            showingGitHub = true;
        }
    }

    function updateContactPreview() {
        const name = $("#connection-name").val();
        const email = $("#connection-email").val();
        if (name === "") {
            $("#preview-name").text("Your name");
        } else {
            $("#preview-name").text(name);
        }
        if (email === "") {
            $("#preview-email").text("Your email");
        } else {
            $("#preview-email").text(email);
        }
    }

    function keepContactPreviewLocal(event) { event.preventDefault(); }

    function animateSkillBar(selector, target) {
        // Stop a running animation so another click can immediately reverse it.
        $(selector).stop(true, false).animate({width: target + "%"}, 500, function () {
            $(this).attr("aria-valuenow", target);
        });
    }

    function animateSkills() {
        if (skillsExpanded) {
            animateSkillBar("#unity-bar", 0);
            animateSkillBar("#csharp-bar", 0);
            animateSkillBar("#javascript-bar", 0);
            $("#animation-message").text("Skill bars are returning to zero.");
            skillsExpanded = false;
        } else {
            animateSkillBar("#unity-bar", 80);
            animateSkillBar("#csharp-bar", 65);
            animateSkillBar("#javascript-bar", 50);
            $("#animation-message").text("Showing the prototype planning targets.");
            skillsExpanded = true;
        }
        $("#animate-skills").attr("aria-pressed", skillsExpanded);
    }

    $("#light-theme").on("click", useLightTheme);
    $("#dark-theme").on("click", useDarkTheme);
    $("#profile-form").on("submit", updateGreeting);
    $("#hide-about").on("click", hideAbout);
    $("#show-about").on("click", showAbout);
    $("#toggle-about").on("click", toggleAbout);
    $("#fade-in").on("click", fadeInGallery);
    $("#fade-out").on("click", fadeOutGallery);
    $("#fade-toggle").on("click", fadeToggleGallery);
    $(".interest-toggle").on("click", toggleInterest);
    $("#expand-interests").on("click", expandInterests);
    $("#collapse-interests").on("click", collapseInterests);
    $("#skill-form").on("submit", addSkill);
    $("#prepend-skill").on("click", prependSkill);
    $("#remove-skill").on("click", removeSkill);
    $("#skill-input").on("input", resetSkillMessage);
    $("#skill-input").on("invalid", showSkillInputError);
    $("#switch-platform").on("click", switchSocialLink);
    $("#connection-name, #connection-email").on("input", updateContactPreview);
    $("#connection-form").on("submit", keepContactPreviewLocal);
    $("#animate-skills").on("click", animateSkills);
    applyTheme(false);
    updateGreeting();
    updateContactPreview();
});
