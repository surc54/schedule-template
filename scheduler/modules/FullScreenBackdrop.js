import $ from "jquery";


export let FullScreenBackdrop = {
    init: () => {

    },

    createBackdrop: (z = 10, appendTo = "body") => {
        let elem = $(document.createElement("div"));

        elem.addClass("fs-backdrop");
        elem.css("z-index", z);

        elem.css("opacity", 0);
        $(appendTo).append(elem);
        setTimeout(() => {
            elem.css("opacity", 1);
        });

        addListeners(elem);
        console.log("Backdrop created.");
        return elem[0];
    },

    removeBackdrop: () => {
        let bd = $("div.fs-backdrop");
        bd.off();
        bd.css("opacity", 0);
        setTimeout(() => {
            bd.remove();
        }, 500);
    },

    listeners: {
        click: (e, elem) => {},
        hover: (e, elem) => {}
    }
};


function addListeners(elem) {
    elem.on("click", (e) => {
        FullScreenBackdrop.listeners.click(e, elem);
    });
    elem.on("hover", (e) => {
        FullScreenBackdrop.listeners.hover(e, elem);
    });
}


