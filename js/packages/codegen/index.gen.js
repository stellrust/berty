import jsonPb from './index.pb.js'

export const berty = {
	chat: {
		ChatService: jsonPb.lookup('.berty.chat.ChatService'),
		Search: jsonPb.lookup('.berty.chat.Search'),
		EventSubscribe: jsonPb.lookup('.berty.chat.EventSubscribe'),
		DevEventSubscribe: jsonPb.lookup('.berty.chat.DevEventSubscribe'),
		ConversationList: jsonPb.lookup('.berty.chat.ConversationList'),
		ConversationGet: jsonPb.lookup('.berty.chat.ConversationGet'),
		ConversationCreate: jsonPb.lookup('.berty.chat.ConversationCreate'),
		ConversationUpdate: jsonPb.lookup('.berty.chat.ConversationUpdate'),
		ConversationMute: jsonPb.lookup('.berty.chat.ConversationMute'),
		ConversationLeave: jsonPb.lookup('.berty.chat.ConversationLeave'),
		ConversationErase: jsonPb.lookup('.berty.chat.ConversationErase'),
		ConversationInvitationSend: jsonPb.lookup('.berty.chat.ConversationInvitationSend'),
		ConversationInvitationAccept: jsonPb.lookup('.berty.chat.ConversationInvitationAccept'),
		ConversationInvitationDecline: jsonPb.lookup('.berty.chat.ConversationInvitationDecline'),
		MessageList: jsonPb.lookup('.berty.chat.MessageList'),
		MessageGet: jsonPb.lookup('.berty.chat.MessageGet'),
		MessageSend: jsonPb.lookup('.berty.chat.MessageSend'),
		MessageEdit: jsonPb.lookup('.berty.chat.MessageEdit'),
		MessageHide: jsonPb.lookup('.berty.chat.MessageHide'),
		MessageReact: jsonPb.lookup('.berty.chat.MessageReact'),
		MessageRead: jsonPb.lookup('.berty.chat.MessageRead'),
		MemberList: jsonPb.lookup('.berty.chat.MemberList'),
		MemberGet: jsonPb.lookup('.berty.chat.MemberGet'),
		ContactList: jsonPb.lookup('.berty.chat.ContactList'),
		ContactGet: jsonPb.lookup('.berty.chat.ContactGet'),
		ContactBlock: jsonPb.lookup('.berty.chat.ContactBlock'),
		ContactRemove: jsonPb.lookup('.berty.chat.ContactRemove'),
		ContactRequestSend: jsonPb.lookup('.berty.chat.ContactRequestSend'),
		ContactRequestAccept: jsonPb.lookup('.berty.chat.ContactRequestAccept'),
		ContactRequestDecline: jsonPb.lookup('.berty.chat.ContactRequestDecline'),
		AccountList: jsonPb.lookup('.berty.chat.AccountList'),
		AccountGet: jsonPb.lookup('.berty.chat.AccountGet'),
		AccountCreate: jsonPb.lookup('.berty.chat.AccountCreate'),
		AccountUpdate: jsonPb.lookup('.berty.chat.AccountUpdate'),
		AccountOpen: jsonPb.lookup('.berty.chat.AccountOpen'),
		AccountClose: jsonPb.lookup('.berty.chat.AccountClose'),
		AccountRemove: jsonPb.lookup('.berty.chat.AccountRemove'),
		AccountPairingInvitationCreate: jsonPb.lookup('.berty.chat.AccountPairingInvitationCreate'),
		AccountRenewIncomingContactRequestLink: jsonPb.lookup(
			'.berty.chat.AccountRenewIncomingContactRequestLink',
		),
	},
	chatmodel: {
		Contact: jsonPb.lookup('.berty.chatmodel.Contact'),
		Device: jsonPb.lookup('.berty.chatmodel.Device'),
		Conversation: jsonPb.lookup('.berty.chatmodel.Conversation'),
		Member: jsonPb.lookup('.berty.chatmodel.Member'),
		Message: jsonPb.lookup('.berty.chatmodel.Message'),
		Attachment: jsonPb.lookup('.berty.chatmodel.Attachment'),
		Reaction: jsonPb.lookup('.berty.chatmodel.Reaction'),
		Account: jsonPb.lookup('.berty.chatmodel.Account'),
	},
	protocol: {
		ProtocolService: jsonPb.lookup('.berty.protocol.ProtocolService'),
		GroupType: jsonPb.lookup('.berty.protocol.GroupType'),
		EventType: jsonPb.lookup('.berty.protocol.EventType'),
		Account: jsonPb.lookup('.berty.protocol.Account'),
		Group: jsonPb.lookup('.berty.protocol.Group'),
		GroupMetadata: jsonPb.lookup('.berty.protocol.GroupMetadata'),
		GroupEnvelope: jsonPb.lookup('.berty.protocol.GroupEnvelope'),
		MessageHeaders: jsonPb.lookup('.berty.protocol.MessageHeaders'),
		MessageEnvelope: jsonPb.lookup('.berty.protocol.MessageEnvelope'),
		EventContext: jsonPb.lookup('.berty.protocol.EventContext'),
		AppMetadata: jsonPb.lookup('.berty.protocol.AppMetadata'),
		ContactAddAliasKey: jsonPb.lookup('.berty.protocol.ContactAddAliasKey'),
		GroupAddMemberDevice: jsonPb.lookup('.berty.protocol.GroupAddMemberDevice'),
		DeviceSecret: jsonPb.lookup('.berty.protocol.DeviceSecret'),
		GroupAddDeviceSecret: jsonPb.lookup('.berty.protocol.GroupAddDeviceSecret'),
		MultiMemberGroupAddAliasResolver: jsonPb.lookup(
			'.berty.protocol.MultiMemberGroupAddAliasResolver',
		),
		MultiMemberGrantAdminRole: jsonPb.lookup('.berty.protocol.MultiMemberGrantAdminRole'),
		MultiMemberInitialMember: jsonPb.lookup('.berty.protocol.MultiMemberInitialMember'),
		GroupAddAdditionalRendezvousSeed: jsonPb.lookup(
			'.berty.protocol.GroupAddAdditionalRendezvousSeed',
		),
		GroupRemoveAdditionalRendezvousSeed: jsonPb.lookup(
			'.berty.protocol.GroupRemoveAdditionalRendezvousSeed',
		),
		AccountGroupJoined: jsonPb.lookup('.berty.protocol.AccountGroupJoined'),
		AccountGroupLeft: jsonPb.lookup('.berty.protocol.AccountGroupLeft'),
		AccountContactRequestDisabled: jsonPb.lookup('.berty.protocol.AccountContactRequestDisabled'),
		AccountContactRequestEnabled: jsonPb.lookup('.berty.protocol.AccountContactRequestEnabled'),
		AccountContactRequestReferenceReset: jsonPb.lookup(
			'.berty.protocol.AccountContactRequestReferenceReset',
		),
		AccountContactRequestEnqueued: jsonPb.lookup('.berty.protocol.AccountContactRequestEnqueued'),
		AccountContactRequestSent: jsonPb.lookup('.berty.protocol.AccountContactRequestSent'),
		AccountContactRequestReceived: jsonPb.lookup('.berty.protocol.AccountContactRequestReceived'),
		AccountContactRequestDiscarded: jsonPb.lookup('.berty.protocol.AccountContactRequestDiscarded'),
		AccountContactRequestAccepted: jsonPb.lookup('.berty.protocol.AccountContactRequestAccepted'),
		AccountContactBlocked: jsonPb.lookup('.berty.protocol.AccountContactBlocked'),
		AccountContactUnblocked: jsonPb.lookup('.berty.protocol.AccountContactUnblocked'),
		InstanceExportData: jsonPb.lookup('.berty.protocol.InstanceExportData'),
		InstanceGetConfiguration: jsonPb.lookup('.berty.protocol.InstanceGetConfiguration'),
		ContactRequestReference: jsonPb.lookup('.berty.protocol.ContactRequestReference'),
		ContactRequestDisable: jsonPb.lookup('.berty.protocol.ContactRequestDisable'),
		ContactRequestEnable: jsonPb.lookup('.berty.protocol.ContactRequestEnable'),
		ContactRequestResetReference: jsonPb.lookup('.berty.protocol.ContactRequestResetReference'),
		ContactRequestSend: jsonPb.lookup('.berty.protocol.ContactRequestSend'),
		ContactRequestAccept: jsonPb.lookup('.berty.protocol.ContactRequestAccept'),
		ContactRequestDiscard: jsonPb.lookup('.berty.protocol.ContactRequestDiscard'),
		ContactBlock: jsonPb.lookup('.berty.protocol.ContactBlock'),
		ContactUnblock: jsonPb.lookup('.berty.protocol.ContactUnblock'),
		ContactAliasKeySend: jsonPb.lookup('.berty.protocol.ContactAliasKeySend'),
		MultiMemberGroupCreate: jsonPb.lookup('.berty.protocol.MultiMemberGroupCreate'),
		MultiMemberGroupJoin: jsonPb.lookup('.berty.protocol.MultiMemberGroupJoin'),
		MultiMemberGroupLeave: jsonPb.lookup('.berty.protocol.MultiMemberGroupLeave'),
		MultiMemberGroupAliasResolverDisclose: jsonPb.lookup(
			'.berty.protocol.MultiMemberGroupAliasResolverDisclose',
		),
		MultiMemberGroupAdminRoleGrant: jsonPb.lookup('.berty.protocol.MultiMemberGroupAdminRoleGrant'),
		MultiMemberGroupInvitationCreate: jsonPb.lookup(
			'.berty.protocol.MultiMemberGroupInvitationCreate',
		),
		AppMetadataSend: jsonPb.lookup('.berty.protocol.AppMetadataSend'),
		AppMessageSend: jsonPb.lookup('.berty.protocol.AppMessageSend'),
		GroupMetadataEvent: jsonPb.lookup('.berty.protocol.GroupMetadataEvent'),
		GroupMessageEvent: jsonPb.lookup('.berty.protocol.GroupMessageEvent'),
		GroupMetadataSubscribe: jsonPb.lookup('.berty.protocol.GroupMetadataSubscribe'),
		GroupMetadataList: jsonPb.lookup('.berty.protocol.GroupMetadataList'),
		GroupMessageSubscribe: jsonPb.lookup('.berty.protocol.GroupMessageSubscribe'),
		GroupMessageList: jsonPb.lookup('.berty.protocol.GroupMessageList'),
		GroupInfo: jsonPb.lookup('.berty.protocol.GroupInfo'),
		ActivateGroup: jsonPb.lookup('.berty.protocol.ActivateGroup'),
		DeactivateGroup: jsonPb.lookup('.berty.protocol.DeactivateGroup'),
		ContactState: jsonPb.lookup('.berty.protocol.ContactState'),
		ShareableContact: jsonPb.lookup('.berty.protocol.ShareableContact'),
		DemoService: jsonPb.lookup('.berty.protocol.DemoService'),
		LogOperation: jsonPb.lookup('.berty.protocol.LogOperation'),
		LogStreamOptions: jsonPb.lookup('.berty.protocol.LogStreamOptions'),
		LogToken: jsonPb.lookup('.berty.protocol.LogToken'),
		LogAdd: jsonPb.lookup('.berty.protocol.LogAdd'),
		LogGet: jsonPb.lookup('.berty.protocol.LogGet'),
		LogList: jsonPb.lookup('.berty.protocol.LogList'),
		LogStream: jsonPb.lookup('.berty.protocol.LogStream'),
	},
}
export const google = {
	api: {
		http: jsonPb.lookup('.google.api.http'),
		Http: jsonPb.lookup('.google.api.Http'),
		HttpRule: jsonPb.lookup('.google.api.HttpRule'),
		CustomHttpPattern: jsonPb.lookup('.google.api.CustomHttpPattern'),
	},
	protobuf: {
		FileDescriptorSet: jsonPb.lookup('.google.protobuf.FileDescriptorSet'),
		FileDescriptorProto: jsonPb.lookup('.google.protobuf.FileDescriptorProto'),
		DescriptorProto: jsonPb.lookup('.google.protobuf.DescriptorProto'),
		ExtensionRangeOptions: jsonPb.lookup('.google.protobuf.ExtensionRangeOptions'),
		FieldDescriptorProto: jsonPb.lookup('.google.protobuf.FieldDescriptorProto'),
		OneofDescriptorProto: jsonPb.lookup('.google.protobuf.OneofDescriptorProto'),
		EnumDescriptorProto: jsonPb.lookup('.google.protobuf.EnumDescriptorProto'),
		EnumValueDescriptorProto: jsonPb.lookup('.google.protobuf.EnumValueDescriptorProto'),
		ServiceDescriptorProto: jsonPb.lookup('.google.protobuf.ServiceDescriptorProto'),
		MethodDescriptorProto: jsonPb.lookup('.google.protobuf.MethodDescriptorProto'),
		FileOptions: jsonPb.lookup('.google.protobuf.FileOptions'),
		MessageOptions: jsonPb.lookup('.google.protobuf.MessageOptions'),
		FieldOptions: jsonPb.lookup('.google.protobuf.FieldOptions'),
		OneofOptions: jsonPb.lookup('.google.protobuf.OneofOptions'),
		EnumOptions: jsonPb.lookup('.google.protobuf.EnumOptions'),
		EnumValueOptions: jsonPb.lookup('.google.protobuf.EnumValueOptions'),
		ServiceOptions: jsonPb.lookup('.google.protobuf.ServiceOptions'),
		MethodOptions: jsonPb.lookup('.google.protobuf.MethodOptions'),
		UninterpretedOption: jsonPb.lookup('.google.protobuf.UninterpretedOption'),
		SourceCodeInfo: jsonPb.lookup('.google.protobuf.SourceCodeInfo'),
		GeneratedCodeInfo: jsonPb.lookup('.google.protobuf.GeneratedCodeInfo'),
		Timestamp: jsonPb.lookup('.google.protobuf.Timestamp'),
	},
}
export const gogoproto = {
	goprotoEnumPrefix: jsonPb.lookup('.gogoproto.goprotoEnumPrefix'),
	goprotoEnumStringer: jsonPb.lookup('.gogoproto.goprotoEnumStringer'),
	enumStringer: jsonPb.lookup('.gogoproto.enumStringer'),
	enumCustomname: jsonPb.lookup('.gogoproto.enumCustomname'),
	enumdecl: jsonPb.lookup('.gogoproto.enumdecl'),
	enumvalueCustomname: jsonPb.lookup('.gogoproto.enumvalueCustomname'),
	goprotoGettersAll: jsonPb.lookup('.gogoproto.goprotoGettersAll'),
	goprotoEnumPrefixAll: jsonPb.lookup('.gogoproto.goprotoEnumPrefixAll'),
	goprotoStringerAll: jsonPb.lookup('.gogoproto.goprotoStringerAll'),
	verboseEqualAll: jsonPb.lookup('.gogoproto.verboseEqualAll'),
	faceAll: jsonPb.lookup('.gogoproto.faceAll'),
	gostringAll: jsonPb.lookup('.gogoproto.gostringAll'),
	populateAll: jsonPb.lookup('.gogoproto.populateAll'),
	stringerAll: jsonPb.lookup('.gogoproto.stringerAll'),
	onlyoneAll: jsonPb.lookup('.gogoproto.onlyoneAll'),
	equalAll: jsonPb.lookup('.gogoproto.equalAll'),
	descriptionAll: jsonPb.lookup('.gogoproto.descriptionAll'),
	testgenAll: jsonPb.lookup('.gogoproto.testgenAll'),
	benchgenAll: jsonPb.lookup('.gogoproto.benchgenAll'),
	marshalerAll: jsonPb.lookup('.gogoproto.marshalerAll'),
	unmarshalerAll: jsonPb.lookup('.gogoproto.unmarshalerAll'),
	stableMarshalerAll: jsonPb.lookup('.gogoproto.stableMarshalerAll'),
	sizerAll: jsonPb.lookup('.gogoproto.sizerAll'),
	goprotoEnumStringerAll: jsonPb.lookup('.gogoproto.goprotoEnumStringerAll'),
	enumStringerAll: jsonPb.lookup('.gogoproto.enumStringerAll'),
	unsafeMarshalerAll: jsonPb.lookup('.gogoproto.unsafeMarshalerAll'),
	unsafeUnmarshalerAll: jsonPb.lookup('.gogoproto.unsafeUnmarshalerAll'),
	goprotoExtensionsMapAll: jsonPb.lookup('.gogoproto.goprotoExtensionsMapAll'),
	goprotoUnrecognizedAll: jsonPb.lookup('.gogoproto.goprotoUnrecognizedAll'),
	gogoprotoImport: jsonPb.lookup('.gogoproto.gogoprotoImport'),
	protosizerAll: jsonPb.lookup('.gogoproto.protosizerAll'),
	compareAll: jsonPb.lookup('.gogoproto.compareAll'),
	typedeclAll: jsonPb.lookup('.gogoproto.typedeclAll'),
	enumdeclAll: jsonPb.lookup('.gogoproto.enumdeclAll'),
	goprotoRegistration: jsonPb.lookup('.gogoproto.goprotoRegistration'),
	messagenameAll: jsonPb.lookup('.gogoproto.messagenameAll'),
	goprotoSizecacheAll: jsonPb.lookup('.gogoproto.goprotoSizecacheAll'),
	goprotoUnkeyedAll: jsonPb.lookup('.gogoproto.goprotoUnkeyedAll'),
	goprotoGetters: jsonPb.lookup('.gogoproto.goprotoGetters'),
	goprotoStringer: jsonPb.lookup('.gogoproto.goprotoStringer'),
	verboseEqual: jsonPb.lookup('.gogoproto.verboseEqual'),
	face: jsonPb.lookup('.gogoproto.face'),
	gostring: jsonPb.lookup('.gogoproto.gostring'),
	populate: jsonPb.lookup('.gogoproto.populate'),
	stringer: jsonPb.lookup('.gogoproto.stringer'),
	onlyone: jsonPb.lookup('.gogoproto.onlyone'),
	equal: jsonPb.lookup('.gogoproto.equal'),
	description: jsonPb.lookup('.gogoproto.description'),
	testgen: jsonPb.lookup('.gogoproto.testgen'),
	benchgen: jsonPb.lookup('.gogoproto.benchgen'),
	marshaler: jsonPb.lookup('.gogoproto.marshaler'),
	unmarshaler: jsonPb.lookup('.gogoproto.unmarshaler'),
	stableMarshaler: jsonPb.lookup('.gogoproto.stableMarshaler'),
	sizer: jsonPb.lookup('.gogoproto.sizer'),
	unsafeMarshaler: jsonPb.lookup('.gogoproto.unsafeMarshaler'),
	unsafeUnmarshaler: jsonPb.lookup('.gogoproto.unsafeUnmarshaler'),
	goprotoExtensionsMap: jsonPb.lookup('.gogoproto.goprotoExtensionsMap'),
	goprotoUnrecognized: jsonPb.lookup('.gogoproto.goprotoUnrecognized'),
	protosizer: jsonPb.lookup('.gogoproto.protosizer'),
	compare: jsonPb.lookup('.gogoproto.compare'),
	typedecl: jsonPb.lookup('.gogoproto.typedecl'),
	messagename: jsonPb.lookup('.gogoproto.messagename'),
	goprotoSizecache: jsonPb.lookup('.gogoproto.goprotoSizecache'),
	goprotoUnkeyed: jsonPb.lookup('.gogoproto.goprotoUnkeyed'),
	nullable: jsonPb.lookup('.gogoproto.nullable'),
	embed: jsonPb.lookup('.gogoproto.embed'),
	customtype: jsonPb.lookup('.gogoproto.customtype'),
	customname: jsonPb.lookup('.gogoproto.customname'),
	jsontag: jsonPb.lookup('.gogoproto.jsontag'),
	moretags: jsonPb.lookup('.gogoproto.moretags'),
	casttype: jsonPb.lookup('.gogoproto.casttype'),
	castkey: jsonPb.lookup('.gogoproto.castkey'),
	castvalue: jsonPb.lookup('.gogoproto.castvalue'),
	stdtime: jsonPb.lookup('.gogoproto.stdtime'),
	stdduration: jsonPb.lookup('.gogoproto.stdduration'),
	wktpointer: jsonPb.lookup('.gogoproto.wktpointer'),
}
