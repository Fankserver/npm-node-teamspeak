import events = require("events");

declare module nodeTeamspeak {
	class NodeTeamspeak extends events.EventEmitter {
		constructor(host?: string, port?: number);
		getPending(): any;
		clearPending(): any;
		send(...args): any;
	}
}

export = nodeTeamspeak.NodeTeamspeak;
