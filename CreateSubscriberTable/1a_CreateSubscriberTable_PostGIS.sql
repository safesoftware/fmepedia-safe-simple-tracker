--********************
--********NOTES*******
--********************
-- assumes table will be placed within a schema called safe_notification_tutorial
-- assumes the owner 'demo' exists


-- Table: safe_notification_tutorial."Subscriber"

-- DROP TABLE safe_notification_tutorial."Subscriber";

CREATE TABLE safe_notification_tutorial."Subscriber"
(
  fns_op text,
  fns_version text,
  fns_type text,
  fns_topic text,
  ios_token text,
  gcm_id text,
  geom geometry(Geometry,4326)
)
WITH (
  OIDS=FALSE
);

ALTER TABLE safe_notification_tutorial."Subscriber"
  OWNER TO demo;

-- Index: safe_notification_tutorial."Subscriber_geom_1405706756564"

-- DROP INDEX safe_notification_tutorial."Subscriber_geom_1405706756564";

CREATE INDEX "Subscriber_geom_1405706756564"
  ON safe_notification_tutorial."Subscriber"
  USING gist
  (geom);

