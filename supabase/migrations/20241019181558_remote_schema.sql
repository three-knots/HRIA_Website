

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";






COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";





SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."Announcements" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "announcement_subject" "text" DEFAULT 'add a short description of the announcement here'::"text",
    "announcement_body" "text" DEFAULT 'Full announcement goes here'::"text"
);


ALTER TABLE "public"."Announcements" OWNER TO "postgres";


COMMENT ON TABLE "public"."Announcements" IS 'Announcements Page';



COMMENT ON COLUMN "public"."Announcements"."id" IS 'Leave blank, this will be generated automatically';



COMMENT ON COLUMN "public"."Announcements"."announcement_subject" IS 'Short description of the announcement';



COMMENT ON COLUMN "public"."Announcements"."announcement_body" IS 'Full text for the announcement';



ALTER TABLE "public"."Announcements" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."Announcements_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."Contact" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."Contact" OWNER TO "postgres";


COMMENT ON TABLE "public"."Contact" IS 'Contact Page';



ALTER TABLE "public"."Contact" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."Contact_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."Events" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."Events" OWNER TO "postgres";


COMMENT ON TABLE "public"."Events" IS 'Events Page';



ALTER TABLE "public"."Events" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."Events_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."Madrassa" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."Madrassa" OWNER TO "postgres";


COMMENT ON TABLE "public"."Madrassa" IS 'Madrassa Page';



ALTER TABLE "public"."Madrassa" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."Madrassa_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."Masjid Information" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."Masjid Information" OWNER TO "postgres";


COMMENT ON TABLE "public"."Masjid Information" IS 'Basic information about masjid that needs to be filled in at startup';



ALTER TABLE "public"."Masjid Information" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."Masjid Information_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."Sisters" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."Sisters" OWNER TO "postgres";


COMMENT ON TABLE "public"."Sisters" IS 'Sisters Page';



ALTER TABLE "public"."Sisters" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."Sisters_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."Youth" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."Youth" OWNER TO "postgres";


COMMENT ON TABLE "public"."Youth" IS 'Youth Page';



ALTER TABLE "public"."Youth" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."Youth_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE ONLY "public"."Announcements"
    ADD CONSTRAINT "Announcements_pkey" PRIMARY KEY ("id", "created_at");



ALTER TABLE ONLY "public"."Contact"
    ADD CONSTRAINT "Contact_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."Events"
    ADD CONSTRAINT "Events_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."Madrassa"
    ADD CONSTRAINT "Madrassa_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."Masjid Information"
    ADD CONSTRAINT "Masjid Information_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."Sisters"
    ADD CONSTRAINT "Sisters_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."Youth"
    ADD CONSTRAINT "Youth_pkey" PRIMARY KEY ("id");



ALTER TABLE "public"."Announcements" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."Contact" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "Delete with supabase admin only" ON "public"."Announcements" FOR DELETE TO "supabase_admin" USING (true);



CREATE POLICY "Enable insert for supabase admin only" ON "public"."Announcements" FOR INSERT TO "supabase_admin" WITH CHECK (true);



CREATE POLICY "Enable read access for all users" ON "public"."Announcements" FOR SELECT USING (true);



CREATE POLICY "Enable update for users based on email" ON "public"."Announcements" FOR UPDATE TO "supabase_admin" USING (true) WITH CHECK (true);



ALTER TABLE "public"."Events" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."Madrassa" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."Masjid Information" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."Sisters" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."Youth" ENABLE ROW LEVEL SECURITY;




ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";


GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";



































































































































































































GRANT ALL ON TABLE "public"."Announcements" TO "anon";
GRANT ALL ON TABLE "public"."Announcements" TO "authenticated";
GRANT ALL ON TABLE "public"."Announcements" TO "service_role";



GRANT ALL ON SEQUENCE "public"."Announcements_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Announcements_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Announcements_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."Contact" TO "anon";
GRANT ALL ON TABLE "public"."Contact" TO "authenticated";
GRANT ALL ON TABLE "public"."Contact" TO "service_role";



GRANT ALL ON SEQUENCE "public"."Contact_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Contact_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Contact_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."Events" TO "anon";
GRANT ALL ON TABLE "public"."Events" TO "authenticated";
GRANT ALL ON TABLE "public"."Events" TO "service_role";



GRANT ALL ON SEQUENCE "public"."Events_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Events_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Events_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."Madrassa" TO "anon";
GRANT ALL ON TABLE "public"."Madrassa" TO "authenticated";
GRANT ALL ON TABLE "public"."Madrassa" TO "service_role";



GRANT ALL ON SEQUENCE "public"."Madrassa_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Madrassa_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Madrassa_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."Masjid Information" TO "anon";
GRANT ALL ON TABLE "public"."Masjid Information" TO "authenticated";
GRANT ALL ON TABLE "public"."Masjid Information" TO "service_role";



GRANT ALL ON SEQUENCE "public"."Masjid Information_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Masjid Information_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Masjid Information_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."Sisters" TO "anon";
GRANT ALL ON TABLE "public"."Sisters" TO "authenticated";
GRANT ALL ON TABLE "public"."Sisters" TO "service_role";



GRANT ALL ON SEQUENCE "public"."Sisters_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Sisters_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Sisters_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."Youth" TO "anon";
GRANT ALL ON TABLE "public"."Youth" TO "authenticated";
GRANT ALL ON TABLE "public"."Youth" TO "service_role";



GRANT ALL ON SEQUENCE "public"."Youth_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Youth_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Youth_id_seq" TO "service_role";



ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";






























RESET ALL;
