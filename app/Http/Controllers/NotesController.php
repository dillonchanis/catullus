<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Note;

class NotesController extends Controller
{
    public function index()
    {
        $notes = Note::where('user_id', Auth::user()->id)
            ->latest()
            ->get();

        return response()->json([
            'data' => $notes
        ], 200);
    }

    public function show(Note $note)
    {
        return response()->json([
            'data' => $note
        ], 200);
    }

    public function store() 
    {
        $note = new Note(request(['title', 'body']));

        auth()->user()->publish($note);

        return response()->json([
            'data' => $note
        ], 200);
    }

    public function update(Request $request)
    {  
        $this->validate(request(), [
            'id' => 'required'
        ]);

        $note = Note::find(request('id'));

        $note->title = request('title');
        $note->body = request('body');

        $note->save();

        return response()->json([
            'data' => $note
        ], 200);
    }

    public function destroy(Request $request)
    {
        $id = $request->get('id');
        $note = Note::find($id);
        $note->delete();

        return response()->json([
            'data' => $note
        ], 200);
    }
}
