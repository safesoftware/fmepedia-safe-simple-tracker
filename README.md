fmepedia-safe-simple-tracker
============================

Architecture
	PDF of Architeture Overview (SimpleTracker.pdf)

CreateSubscriberTable
	1a_CreateSubscriberTable_PostGIS.sql
	1b_CreateSubscriberTableinPostGIS.fmw
	1b_SubscriberTable.ffs

JSON
	Contains sample JSON files that can be used to test the Notifcations.
		ReportAndroid.json
		ReportiOS.json
		SubscribeAndroid.json
		SubscribeiOS.JSON
		UnsubscribeiOS.json
		
fme
	Contains 2 workspaces that support the mobile applicatons FME Reporter and FME Alerts.  The files contain readers, writers and FMEServerNotifiers that need to be updated to ensure they point to the correct system you are configuring.