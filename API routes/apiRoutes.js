const noteTaker = require("express").Router();
const nt = require("/htmlRoutes");

    router.get("/notes", function(req, res) {
       nt
       .getNotes()
       .then(notes => res.json(notes))
       .catch(err => res.status(500).json(err));
    });

    router.post("/notes", function(req, res) {
       nt
         .addNotes()
         .then(notes => res.json(notes))
         .catch(err => res.status(500).json(err));
    });

    router.delete("/notes/:id", function(req, res) {
       nt
       .removeNote(req.params.id)
       .then(() => res.json({ ok: trure }))
       .catch(err => res.status(500).json(err));
    });

   module.exports = router;
