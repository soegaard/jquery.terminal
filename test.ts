/// <reference path="./js/jquery.terminal.d.ts" />

import "jquery";
import "jquery.terminal";

// -----------------------------------------------------------------------------
// :: instance
// -----------------------------------------------------------------------------

$('.term').terminal(function(command, term) {

});
$('.term').terminal(function(command) {

});
$('.term').terminal([function(command, term) {

}]);
$('.term').terminal("foo.php");
$('.term').terminal(["foo.php"]);
var obj_interpreter: JQueryTerminal.ObjectInterpreter = {
    foo: function(...args) {
    },
    bar: function(a, b) {
        return Promise.resolve("foo");
    },
    baz: {
        a: function() {
        },
        b: {
            c: function() {
            }
        }
    }
};
$('.term').terminal([obj_interpreter]);
$('.term').terminal(["foo.php", obj_interpreter]);
$('.term').terminal(["foo.php", obj_interpreter, function(command) {
}]);

// -----------------------------------------------------------------------------
// :: Options
// -----------------------------------------------------------------------------
(function() {
    // -------------------------------------------------------------------------
    // :: prompt
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        prompt: function() {
            return Promise.resolve(">>> ");
        }
    });
    $('.term').terminal($.noop, {
        prompt: ">>> "
    });
    $('.term').terminal($.noop, {
        prompt: function(cb) {
            cb(">>> ");
            console.log(this.get_command());
        }
    });
    // -------------------------------------------------------------------------
    // :: keymap
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        keymap: {
            'CTRL+C': function(e, original) {
                console.log(e.target);
                original(e);
            }
        }
    });
    // -------------------------------------------------------------------------
    // :: exceptionHandler
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        exceptionHandler: function(e, label) {
            this.error(e.message);
        }
    });
    // -------------------------------------------------------------------------
    // :: processRPCResponse
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        processRPCResponse: function(data) {
            data.result = 10;
        }
    });
    // -------------------------------------------------------------------------
    // :: greetings
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        greetings: "hello"
    });
    $('.term').terminal($.noop, {
        greetings: null
    });
    $('.term').terminal($.noop, {
        greetings: function(cb) {
            cb("hello");
        }
    });
    // -------------------------------------------------------------------------
    // :: scrollObject
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        scrollObject: "html"
    });
    $('.term').terminal($.noop, {
        scrollObject: $("body")
    });
    $('.term').terminal($.noop, {
        scrollObject: document.body
    });
    // -------------------------------------------------------------------------
    // :: historyFilter
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        historyFilter: /^ /
    });
    $('.term').terminal($.noop, {
        historyFilter: function(command) {
            return !!command.match(/^ /);
        }
    });
    // -------------------------------------------------------------------------
    // :: login
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        login: true
    });
    $('.term').terminal($.noop, {
        login: function(username, password) {
            return Promise.resolve("TOKEN");
        }
    });
    $('.term').terminal($.noop, {
        login: function(username, password, cb) {
            cb("TOKEN");
        }
    });
    // -------------------------------------------------------------------------
    // :: onAjaxError
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        onAjaxError: function(xhr, status, error) {
            xhr.getAllResponseHeaders();
            status.charCodeAt(0);
            error.charCodeAt(0);
        }
    });
    // -------------------------------------------------------------------------
    // :: request
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        request: function(xhr, json, term) {
            term.echo("foo");
        }
    });
    $('.term').terminal($.noop, {
        request: function(xhr, data) {
            data.params.unshift("token");
            this.echo(JSON.stringify(data));
            var term = this;
            xhr.then(function(value) {
                term.echo(value);
            });
        }
    });
    // -------------------------------------------------------------------------
    // :: response
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        response: function(xhr, data) {
            data.result = 10;
            this.echo(JSON.stringify(data));
            var term = this;
            xhr.then(function(value) {
                term.echo(value);
            });
        }
    });
    // -------------------------------------------------------------------------
    // :: onRPCError
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        onRPCError: function(error) {
            this.echo(error.error.message);
        }
    });
    // -------------------------------------------------------------------------
    // :: doubleTab
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        doubleTab: function(str, matched, echo_Command) {
            echo_Command();
            this.echo(matched.slice(1).concat([str]));
        }
    });
    // -------------------------------------------------------------------------
    // :: completion
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        completion: ["foo", "bar", "baz"]
    });
    $('.term').terminal($.noop, {
        completion: function(str, cb) {
            str.charCodeAt(0);
            cb(["foo", "bar", "baz"]);
        }
    });
    // -------------------------------------------------------------------------
    // :: Simple events
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        onInit: function(term) {
            this.echo('event');
        }
    });
    $('.term').terminal($.noop, {
        onClear: function(term) {
            this.echo('event');
        }
    });
    $('.term').terminal($.noop, {
        onBlur: function(term) {
            this.echo('event');
        }
    });
    $('.term').terminal($.noop, {
        onFocus: function(term) {
            this.echo('event');
        }
    });
    $('.term').terminal($.noop, {
        onExit: function(term) {
            this.echo('event');
        }
    });
    $('.term').terminal($.noop, {
        onAfterRedraw: function(term) {
            this.echo('event');
        }
    });
    $('.term').terminal($.noop, {
        onFlush: function(term) {
            this.echo('event');
        }
    });
    // -------------------------------------------------------------------------
    // :: onPush
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        onPush: function(before, after) {
            before.interpreter.call(this, "init", this);
        }
    });
    // -------------------------------------------------------------------------
    // :: onPush
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        onPop: function(before, after) {
            before.interpreter.call(this, "init", this);
        }
    });
    // -------------------------------------------------------------------------
    // :: keypress
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        keypress: function(e) {
            this.echo(e.key);
        }
    });
    // -------------------------------------------------------------------------
    // :: keydown
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        keydown: function(e) {
            this.echo(e.key);
        }
    });
    // -------------------------------------------------------------------------
    // :: onEchoCommand
    // -------------------------------------------------------------------------
    $('.term').terminal($.noop, {
        onEchoCommand: function(div, command) {
            div.css('color', 'red');
            this.echo(command.charCodeAt(0).toString());
        }
    });
});

// -----------------------------------------------------------------------------
// :: Methods
// -----------------------------------------------------------------------------
(function() {
    function test_type<T>(x: T) {};
    var term = $('.term').terminal();
    // -------------------------------------------------------------------------
    // :: id
    // -------------------------------------------------------------------------
    test_type<number>(term.id());
    // -------------------------------------------------------------------------
    // :: clear
    // -------------------------------------------------------------------------
    term.clear().clear();
    // -------------------------------------------------------------------------
    // :: import/export
    // -------------------------------------------------------------------------
    term.import_view(term.export_view());
    // -------------------------------------------------------------------------
    // :: save_state
    // -------------------------------------------------------------------------
    term.save_state("foo");
    term.save_state("foo", true);
    term.save_state("foo", undefined, 10);
    term.save_state("foo", false, 10);
    // -------------------------------------------------------------------------
    // :: exec
    // -------------------------------------------------------------------------
    term.exec("foo");
    term.exec("foo", true);
    term.exec("foo", true, jQuery.Deferred()).then(function() {
    });
    // -------------------------------------------------------------------------
    // :: autologin
    // -------------------------------------------------------------------------
    term.autologin("username", "TOKEN").clear();
    term.autologin("username", "TOKEN", true).clear();
    // -------------------------------------------------------------------------
    // :: login
    // -------------------------------------------------------------------------
    term.login(function(username, password, callback) {

    }).clear();
    term.login(function(username, password) {

    }).clear();
    term.login(function(username, password) {

    }, true, () => {}).clear();
    term.login(function(username, password) {

    }, undefined, () => {}).clear();
    term.login(function(username, password) {

    }, true, () => {}, () => {}).clear();
    // -------------------------------------------------------------------------
    // :: settings
    // -------------------------------------------------------------------------
    term.before_cursor().charCodeAt(0);
    term.before_cursor(true).charCodeAt(0);
    // -------------------------------------------------------------------------
    // ::
    // -------------------------------------------------------------------------
    term.set_interpreter(function(command) {
    });
    term.set_interpreter(function(command, term) {

    });
    term.set_interpreter(function(command) {

    });
    term.set_interpreter([function(command, term) {

    }]);
    term.set_interpreter("foo.php");
    term.set_interpreter(["foo.php"]);
    term.set_interpreter([obj_interpreter]);
    term.set_interpreter(["foo.php", obj_interpreter]);
    term.set_interpreter(["foo.php", obj_interpreter, function(command) {
    }]);
    term.set_interpreter("foo.php", true);
    term.set_interpreter("foo.php", "login");
    term.set_interpreter("foo.php", function(user, password) {
    });
    term.set_interpreter("foo.php", function(user, password, cb) {
        cb("Foo");
    });
    // -------------------------------------------------------------------------
    // :: greetings
    // -------------------------------------------------------------------------
    term.greetings().echo("foo");
    // -------------------------------------------------------------------------
    // :: paused
    // -------------------------------------------------------------------------
    test_type<boolean>(term.paused());
    // -------------------------------------------------------------------------
    // :: pause
    // -------------------------------------------------------------------------
    term.pause().echo("foo");
    // -------------------------------------------------------------------------
    // :: resume
    // -------------------------------------------------------------------------
    term.resume().echo("foo");
    // -------------------------------------------------------------------------
    // :: cols
    // -------------------------------------------------------------------------
    test_type<number>(term.cols());
    // -------------------------------------------------------------------------
    // :: rows
    // -------------------------------------------------------------------------
    test_type<number>(term.rows());
    // -------------------------------------------------------------------------
    // :: history
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal.History<string>>(term.history())
    // -------------------------------------------------------------------------
    // :: history_state
    // -------------------------------------------------------------------------
    term.history_state(true).echo("foo");
    // -------------------------------------------------------------------------
    // :: clear_history_state
    // -------------------------------------------------------------------------
    term.clear_history_state().echo("foo");
    // -------------------------------------------------------------------------
    // :: next
    // -------------------------------------------------------------------------
    term.next().echo("foo");
    // -------------------------------------------------------------------------
    // :: focus
    // -------------------------------------------------------------------------
    term.focus().echo("foo");
    term.focus(true).echo("foo");
    // -------------------------------------------------------------------------
    // :: freeze
    // -------------------------------------------------------------------------
    term.freeze().echo("foo");
    term.freeze(true).echo("foo");
    // -------------------------------------------------------------------------
    // :: fronzen
    // -------------------------------------------------------------------------
    test_type<boolean>(term.frozen());
    // -------------------------------------------------------------------------
    // :: enable
    // -------------------------------------------------------------------------
    term.enable().echo("foo");
    term.enable(true);
    // -------------------------------------------------------------------------
    // :: disable
    // -------------------------------------------------------------------------
    term.disable().echo("foo");
    term.disable(true);
    // -------------------------------------------------------------------------
    // :: enabled
    // -------------------------------------------------------------------------
    test_type<boolean>(term.enabled());
    // -------------------------------------------------------------------------
    // :: signature
    // -------------------------------------------------------------------------
    test_type<string>(term.signature());
    // -------------------------------------------------------------------------
    // :: version
    // -------------------------------------------------------------------------
    test_type<string>(term.version());
    // -------------------------------------------------------------------------
    // :: cmd
    // -------------------------------------------------------------------------
    test_type<Cmd>(term.cmd());
    // -------------------------------------------------------------------------
    // :: get_command
    // -------------------------------------------------------------------------
    test_type<string>(term.get_command());
    // -------------------------------------------------------------------------
    // :: set_command
    // -------------------------------------------------------------------------
    term.set_command("foo").echo("foo");
    term.set_command("foo", true);
    // -------------------------------------------------------------------------
    // :: get_position
    // -------------------------------------------------------------------------
    test_type<number>(term.get_position());
    // -------------------------------------------------------------------------
    // :: insert
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.insert("foo"));
    term.insert("foo", true);
    // -------------------------------------------------------------------------
    // :: set_prompt
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.set_prompt(">>> "));
    term.set_prompt(function(cb) {
        cb(">>> ");
        this.get_command();
    });
    term.set_prompt(function() {
        this.get_command();
        return Promise.resolve(">>> ");
    });
    // -------------------------------------------------------------------------
    // :: get_command
    // -------------------------------------------------------------------------
    var fn: (cb: (prompt: string) => void) => void =  term.get_prompt();
    var prompt: string = term.get_prompt();
    // -------------------------------------------------------------------------
    // :: set_mask
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.set_mask(true));
    term.set_mask("-");
    // -------------------------------------------------------------------------
    // :: get_output
    // -------------------------------------------------------------------------
    test_type<string[]>(term.get_output());
    var lines: JQueryTerminal.Lines = term.get_output();
    test_type<number>(lines[0].index);
    var div = $('<div/>');
    lines[0].options.finalize(div);
    // -------------------------------------------------------------------------
    // :: resize
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.resize());
    term.resize(100);
    term.resize(100, 200);
    // -------------------------------------------------------------------------
    // :: refresh
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.refresh());
    // -------------------------------------------------------------------------
    // :: flush
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.flush());
    term.flush({update: true});
    term.flush({scroll: true});
    // -------------------------------------------------------------------------
    // :: update
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.update(10, ">>>"));
    term.update(10, ">>>", {
        finalize: function(div) {
            div.css('color', 'red');
        }
    });
    // -------------------------------------------------------------------------
    // :: remove_line
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.remove_line(10));
    // -------------------------------------------------------------------------
    // :: echo
    // -------------------------------------------------------------------------
    term.echo("foo");
    term.echo(["foo", "bar"]);
    term.echo(function() {
        return "foo";
    });
    term.echo(function() {
        return ["foo", "bar"];
    });
    term.echo(Promise.resolve("foo"));
    term.echo(Promise.resolve(["foo"]));
    term.echo(Promise.resolve(function(): string {
        return "foo";
    }));
    term.echo(Promise.resolve(function(): string[] {
        return ["foo"];
    }));
    // -------------------------------------------------------------------------
    // :: error
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.error("foo"));
    term.error(function() {
        return "foo";
    });
    term.error(Promise.resolve("foo"), {
        finalize: function(div) {
            div.addClass('error-string');
        }
    });
    // -------------------------------------------------------------------------
    // :: exception
    // -------------------------------------------------------------------------
    var e = new $.terminal.Exception("error");
    test_type<JQueryTerminal>(term.exception(e));
    term.exception(e, "ERROR");
    // -------------------------------------------------------------------------
    // :: scroll
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.scroll(10));
    // -------------------------------------------------------------------------
    // :: logout
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.logout());
    term.logout(true);
    // -------------------------------------------------------------------------
    // :: token
    // -------------------------------------------------------------------------
    test_type<string>(term.token());
    term.token(true);
    // -------------------------------------------------------------------------
    // :: set_token
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.set_token("foo"));
    term.set_token("foo", true);
    // -------------------------------------------------------------------------
    // :: get_token
    // -------------------------------------------------------------------------
    test_type<string>(term.get_token());
    term.get_token(true);
    // -------------------------------------------------------------------------
    // :: login_name
    // -------------------------------------------------------------------------
    test_type<string>(term.login_name());
    term.login_name(true);
    // -------------------------------------------------------------------------
    // :: name
    // -------------------------------------------------------------------------
    test_type<string>(term.name());
    // -------------------------------------------------------------------------
    // :: prefix_name
    // -------------------------------------------------------------------------
    test_type<string>(term.prefix_name());
    test_type<string>(term.prefix_name(true));
    // -------------------------------------------------------------------------
    // :: read
    // -------------------------------------------------------------------------
    term.read("foo", function(s) {
        s.charCodeAt(0);
    }).then(function(s) {
        s.charCodeAt(0);
    });
    // -------------------------------------------------------------------------
    // :: push
    // -------------------------------------------------------------------------
    term.push(function(command) {
    });
    term.push(function(command, term) {

    });
    
    term.push(function(command) {

    });
    term.push([function(command, term) {

    }]);
    term.push("foo.php");
    term.push(["foo.php"]);
    term.push([obj_interpreter]);
    term.push(["foo.php", obj_interpreter]);
    term.push(["foo.php", obj_interpreter, function(command) {
    }]);
    term.push("foo", {
        login: true
    });
    term.push("foo", {
        infiniteLogin: true
    });
    term.push("foo", {
        prompt: "foo"
    });
    term.push("foo", {
        prompt: function(cb) {
            cb("foo");
            var s: string = this.get_command();
        }
    });
    term.push("foo", {
        login: function(username, password, cb) {
            cb('TOKEN');
        }
    });
    term.push("foo", {
        completion: ["foo", "bar", "baz"]
    });
    term.push("foo", {
        completion: function(str, cb) {
            str.charCodeAt(0);
            cb(["foo", "bar", "baz"]);
        }
    });
    // -------------------------------------------------------------------------
    // :: pop
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.pop());
    term.pop("foo");
    term.pop("foo", true);
    // -------------------------------------------------------------------------
    // :: option
    // -------------------------------------------------------------------------
    var option: string = term.option('name');
    term.option({
        completion: ["foo"]
    });
    term.option("completion", ["foo"]);
    // -------------------------------------------------------------------------
    // :: invoke_key
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.invoke_key("CTRL+C"));
    // -------------------------------------------------------------------------
    // :: keymap
    // -------------------------------------------------------------------------
    var keymap_fn: (e: JQueryKeyEventObject) => any = term.keymap('CTRL+K');
    var keymap: {
        [key: string]: (e: JQueryKeyEventObject) => any;
    } = term.keymap();
    keymap['CTRL+C']($.Event("keypress"));
    term.keymap("CTRL+C", keymap_fn);
    term.keymap(keymap);
    // -------------------------------------------------------------------------
    // :: level
    // -------------------------------------------------------------------------
    test_type<number>(term.level());
    // -------------------------------------------------------------------------
    // :: reset
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.reset());
    // -------------------------------------------------------------------------
    // :: purge
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.purge());
    // -------------------------------------------------------------------------
    // :: destroy
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.destroy());
    // -------------------------------------------------------------------------
    // :: scroll_to_bottom
    // -------------------------------------------------------------------------
    test_type<JQueryTerminal>(term.scroll_to_bottom());
    // -------------------------------------------------------------------------
    // :: is_bottom
    // -------------------------------------------------------------------------
    test_type<boolean>(term.is_bottom());
});
