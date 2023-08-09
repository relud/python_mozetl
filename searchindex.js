Search.setIndex({docnames:["index","readme","source/modules","source/mozetl","source/mozetl.addon_aggregates","source/mozetl.basic","source/mozetl.bhr_collection","source/mozetl.clientsdaily","source/mozetl.engagement","source/mozetl.engagement.churn","source/mozetl.engagement.churn_to_csv","source/mozetl.engagement.retention","source/mozetl.experimentsdaily","source/mozetl.graphics","source/mozetl.hardware_report","source/mozetl.landfill","source/mozetl.search","source/mozetl.shield","source/mozetl.symbolication","source/mozetl.sync","source/mozetl.taar","source/mozetl.testpilot","source/mozetl.topline"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","readme.rst","source/modules.rst","source/mozetl.rst","source/mozetl.addon_aggregates.rst","source/mozetl.basic.rst","source/mozetl.bhr_collection.rst","source/mozetl.clientsdaily.rst","source/mozetl.engagement.rst","source/mozetl.engagement.churn.rst","source/mozetl.engagement.churn_to_csv.rst","source/mozetl.engagement.retention.rst","source/mozetl.experimentsdaily.rst","source/mozetl.graphics.rst","source/mozetl.hardware_report.rst","source/mozetl.landfill.rst","source/mozetl.search.rst","source/mozetl.shield.rst","source/mozetl.symbolication.rst","source/mozetl.sync.rst","source/mozetl.taar.rst","source/mozetl.testpilot.rst","source/mozetl.topline.rst"],objects:{"":{mozetl:[3,0,0,"-"]},"mozetl.addon_aggregates":{addon_aggregates:[4,0,0,"-"]},"mozetl.addon_aggregates.addon_aggregates":{add_addon_columns:[4,1,1,""],aggregate_addons:[4,1,1,""],get_dest:[4,1,1,""],load_main_summary:[4,1,1,""],ms_explode_addons:[4,1,1,""]},"mozetl.basic":{transform:[5,0,0,"-"]},"mozetl.basic.transform":{DataFrameConfig:[5,2,1,""],convert_pings:[5,1,1,""],convert_rdd:[5,1,1,""]},"mozetl.basic.transform.DataFrameConfig":{get_paths:[5,3,1,""],toStructType:[5,3,1,""]},"mozetl.clientsdaily":{rollup:[7,0,0,"-"]},"mozetl.clientsdaily.rollup":{extract_search_counts:[7,1,1,""],get_partition_count_for_writing:[7,1,1,""],load_main_summary:[7,1,1,""],to_profile_day_aggregates:[7,1,1,""],write_one_activity_day:[7,1,1,""]},"mozetl.experimentsdaily":{rollup:[12,0,0,"-"]},"mozetl.experimentsdaily.rollup":{load_experiments_summary:[12,1,1,""],to_experiment_profile_day_aggregates:[12,1,1,""]},"mozetl.hardware_report":{check_output:[14,0,0,"-"],hardware_dashboard:[14,0,0,"-"],summarize_json:[14,0,0,"-"]},"mozetl.hardware_report.check_output":{check_output:[14,1,1,""]},"mozetl.hardware_report.summarize_json":{aggregate_data:[14,1,1,""],build_device_map:[14,1,1,""],collapse_buckets:[14,1,1,""],fetch_json:[14,1,1,""],fetch_previous_state:[14,1,1,""],finalize_data:[14,1,1,""],generate_report:[14,1,1,""],get_OS_arch:[14,1,1,""],get_device_family_chipset:[14,1,1,""],get_file_name:[14,1,1,""],get_latest_valid_per_client:[14,1,1,""],get_longitudinal_version:[14,1,1,""],get_valid_client_record:[14,1,1,""],invert_device_map:[14,1,1,""],prepare_data:[14,1,1,""],serialize_results:[14,1,1,""],store_new_state:[14,1,1,""],validate_finalized_data:[14,1,1,""],vendor_name_from_id:[14,1,1,""]},"mozetl.landfill":{sampler:[15,0,0,"-"]},"mozetl.landfill.sampler":{extract:[15,1,1,""],save:[15,1,1,""],transform:[15,1,1,""]},"mozetl.main":{etl_job:[3,1,1,""],get_data:[3,1,1,""],ping_to_row:[3,1,1,""],transform_pings:[3,1,1,""]},"mozetl.search":{aggregates:[16,0,0,"-"]},"mozetl.search.aggregates":{add_derived_columns:[16,1,1,""],agg_first:[16,1,1,""],agg_search_data:[16,1,1,""],explode_search_counts:[16,1,1,""],gen_click_command:[16,1,1,""],generate_rollups:[16,1,1,""],get_ad_click_count:[16,1,1,""],get_search_addon_version:[16,1,1,""],get_search_with_ads_count:[16,1,1,""],search_aggregates:[16,1,1,""],search_aggregates_etl:[16,1,1,""],search_clients_daily:[16,1,1,""],search_clients_daily_etl:[16,1,1,""]},"mozetl.shield":{privacy_prefs:[17,0,0,"-"],utils:[17,0,0,"-"]},"mozetl.shield.privacy_prefs":{etl_job:[17,1,1,""],include_event_pings:[17,1,1,""],include_state_pings:[17,1,1,""],transform_event_pings:[17,1,1,""],transform_state_pings:[17,1,1,""]},"mozetl.shield.utils":{shield_etl_boilerplate:[17,1,1,""]},"mozetl.sync":{bookmark_validation:[19,0,0,"-"]},"mozetl.sync.bookmark_validation":{extract:[19,1,1,""],load:[19,1,1,""],transform:[19,1,1,""]},"mozetl.taar":{taar_amodump:[20,0,0,"-"],taar_amowhitelist:[20,0,0,"-"],taar_dynamo:[20,0,0,"-"],taar_lite_guidguid:[20,0,0,"-"],taar_lite_guidranking:[20,0,0,"-"],taar_locale:[20,0,0,"-"],taar_similarity:[20,0,0,"-"],taar_utils:[20,0,0,"-"]},"mozetl.taar.taar_amodump":{AMOAddonFile:[20,2,1,""],AMOAddonInfo:[20,2,1,""],AMOAddonVersion:[20,2,1,""],AMODatabase:[20,2,1,""],JSONSchema:[20,2,1,""],Undefined:[20,2,1,""],logger:[20,5,1,""],marshal:[20,1,1,""]},"mozetl.taar.taar_amodump.AMOAddonFile":{meta:[20,4,1,""]},"mozetl.taar.taar_amodump.AMOAddonInfo":{meta:[20,4,1,""]},"mozetl.taar.taar_amodump.AMOAddonVersion":{meta:[20,4,1,""]},"mozetl.taar.taar_amodump.AMODatabase":{fetch_addons:[20,3,1,""]},"mozetl.taar.taar_amowhitelist":{AMOTransformer:[20,2,1,""],AbstractAccumulator:[20,2,1,""],FeaturedAccumulator:[20,2,1,""],WhitelistAccumulator:[20,2,1,""],WhitelistFeaturedAccumulator:[20,2,1,""]},"mozetl.taar.taar_amowhitelist.AMOTransformer":{extract:[20,3,1,""],get_featuredlist:[20,3,1,""],get_featuredwhitelist:[20,3,1,""],get_whitelist:[20,3,1,""],load:[20,3,1,""],load_featuredlist:[20,3,1,""],load_featuredwhitelist:[20,3,1,""],load_whitelist:[20,3,1,""],transform:[20,3,1,""]},"mozetl.taar.taar_amowhitelist.AbstractAccumulator":{get_results:[20,3,1,""],process_record:[20,3,1,""]},"mozetl.taar.taar_amowhitelist.FeaturedAccumulator":{process_record:[20,3,1,""]},"mozetl.taar.taar_amowhitelist.WhitelistAccumulator":{process_record:[20,3,1,""]},"mozetl.taar.taar_amowhitelist.WhitelistFeaturedAccumulator":{get_results:[20,3,1,""],process_record:[20,3,1,""]},"mozetl.taar.taar_dynamo":{CredentialSingleton:[20,2,1,""],DynamoReducer:[20,2,1,""],etl:[20,1,1,""],extract_transform:[20,1,1,""],filterDateAndClientID:[20,1,1,""],json_serial:[20,1,1,""],list_transformer:[20,1,1,""],load_rdd:[20,1,1,""],run_etljob:[20,1,1,""]},"mozetl.taar.taar_dynamo.CredentialSingleton":{getInstance:[20,3,1,""],get_new_creds:[20,3,1,""]},"mozetl.taar.taar_dynamo.DynamoReducer":{dynamo_reducer:[20,3,1,""],hash_client_ids:[20,3,1,""],push_to_dynamo:[20,3,1,""]},"mozetl.taar.taar_lite_guidguid":{extract_telemetry:[20,1,1,""],get_addons_per_client:[20,1,1,""],get_initial_sample:[20,1,1,""],is_valid_addon:[20,1,1,""],key_all:[20,1,1,""],load_s3:[20,1,1,""],transform:[20,1,1,""]},"mozetl.taar.taar_lite_guidranking":{extract_telemetry:[20,1,1,""],load_s3:[20,1,1,""],transform:[20,1,1,""]},"mozetl.taar.taar_locale":{compute_noisy_counts:[20,1,1,""],generate_dictionary:[20,1,1,""],get_addon_limits_by_locale:[20,1,1,""],get_client_addons:[20,1,1,""],get_protected_locale_addon_counts:[20,1,1,""],get_top_addons_by_locale:[20,1,1,""],limit_client_addons:[20,1,1,""],rlaplace:[20,1,1,""]},"mozetl.taar.taar_similarity":{compute_clusters:[20,1,1,""],format_donors_dictionary:[20,1,1,""],generate_non_cartesian_pairs:[20,1,1,""],get_addons_per_client:[20,1,1,""],get_donor_pools:[20,1,1,""],get_donors:[20,1,1,""],get_lr_curves:[20,1,1,""],get_samples:[20,1,1,""],similarity_function:[20,1,1,""],today_minus_90_days:[20,1,1,""]},"mozetl.taar.taar_utils":{hash_telemetry_id:[20,1,1,""],load_amo_curated_whitelist:[20,1,1,""],load_amo_external_whitelist:[20,1,1,""],read_from_s3:[20,1,1,""],selfdestructing_path:[20,1,1,""],store_json_to_s3:[20,1,1,""],write_to_s3:[20,1,1,""]},"mozetl.utils":{delete_from_s3:[3,1,1,""],extract_submission_window_for_activity_day:[3,1,1,""],format_as_submission_date:[3,1,1,""],format_spark_path:[3,1,1,""],generate_filter_parameters:[3,1,1,""],parse_as_submission_date:[3,1,1,""],send_ses:[3,1,1,""],stop_session_safely:[3,1,1,""],upload_file_to_s3:[3,1,1,""],write_csv:[3,1,1,""],write_csv_to_s3:[3,1,1,""]},mozetl:{addon_aggregates:[4,0,0,"-"],basic:[5,0,0,"-"],bhr_collection:[6,0,0,"-"],cli:[3,0,0,"-"],clientsdaily:[7,0,0,"-"],constants:[3,0,0,"-"],experimentsdaily:[12,0,0,"-"],graphics:[13,0,0,"-"],hardware_report:[14,0,0,"-"],landfill:[15,0,0,"-"],main:[3,0,0,"-"],schemas:[3,0,0,"-"],search:[16,0,0,"-"],shield:[17,0,0,"-"],symbolication:[18,0,0,"-"],sync:[19,0,0,"-"],taar:[20,0,0,"-"],utils:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:data"},terms:{"0xabcd":14,"0xbcde":14,"100":20,"1000":[15,20],"1349065":19,"1374831":19,"1381140":16,"1386274":20,"1396549":20,"140mb":7,"1410963":19,"1485152":20,"14gb":7,"15gb":3,"1774":20,"1972":20,"1c544f65ad2852703883fe31a9fba38c39e75698":20,"1gb":7,"2001":20,"2017":3,"20180218":20,"246":20,"256mb":7,"32bit":14,"361527076523":20,"364f56182f3e96fb3131bf38ff648609":19,"46dddac9d063589275f06b0443fcc69d":20,"490":20,"64bit":14,"9th":20,"abstract":20,"boolean":7,"case":20,"class":[5,20],"default":[7,14,20],"final":[14,20],"float":20,"function":[3,20],"import":20,"int":[4,20],"long":20,"new":[1,14,20],"null":7,"return":[4,5,7,14,20],"true":[3,4,14,17,20],"while":1,Eds:20,For:[1,16,20],IDs:[14,20],Not:20,One:[7,16],The:[1,4,14,16,19,20],Then:[1,14],There:[1,20],These:[1,20],Use:1,_sum:7,about:1,abov:4,abramowitz:20,abs:20,absolut:20,abstractaccumul:20,accept:1,access:[7,20],access_point:7,accumul:20,acl:3,activ:[3,20],active_addon:[4,16,20],activity_d:3,actual:20,ad_click_count:16,adapt:[19,20],add:[1,4,14,16,20],add_addon_column:4,add_derived_column:16,added:[1,4,20],addit:[4,15,16],addition:20,addon:[16,20],addon_aggreg:[2,3],addon_count:20,addon_data:20,addon_limit:20,addon_vers:16,addon_whitelist:20,addons_df:20,ads:16,after:[3,20],against:20,agg_first:16,agg_funct:16,agg_search_data:16,aggreg:[2,3,4,14,20],aggregate_addon:4,aggregate_data:14,aggregated_data:14,airflow:0,alert:1,all:[1,7,14,16,20],allow:[1,16,20],along:[14,20],also:1,alwai:7,amazon:20,amazonaw:20,amo:20,amo_databas:20,amoaddonfil:20,amoaddoninfo:20,amoaddonvers:20,amodatabas:20,amotransform:20,analys:14,analysi:[1,16],ani:20,api:1,append:14,appli:[16,20],appropri:1,apt:1,arang:20,arch:14,architectur:14,arguement:16,argument:1,arn:20,arrai:[7,14,20],array_lik:20,art:7,associ:20,assum:14,assumpt:20,atmo:0,attribut:20,augment:[16,20],automat:1,averag:20,avoid:[19,20],aws:20,backfil:[14,15],backup:20,bandwidth:20,bar:1,base:[5,20],base_filenam:20,basic:[2,3],batch:20,batch_view:20,becaus:7,been:[1,20],befor:[1,3],begin:14,behavior:16,belong:20,benefit:0,better:20,between:[3,20],bin:[1,20],birkhaus:20,blob:20,boilerpl:1,bookmark:19,bookmark_valid:[2,3],bool:20,both:20,branch:1,branchnam:1,broadcast:20,broadcast_amo_whitelist:20,broken:14,broken_ratio:14,browser:14,browser_arch:14,bucket:[3,4,14,15,16,19,20],bucket_nam:3,budget:20,bug:[16,19,20],build:[1,14],build_device_map:14,built:20,cach:3,call:0,callabl:20,can:[1,14,20],candid:20,cannot:20,categori:20,central:1,changelog:15,channel:[4,20],check:14,check_output:[2,3],chipset:14,chrome:16,chunk:14,churn:[3,8],churn_to_csv:[3,8],cli:[1,2],click:16,client:[3,4,14,20],client_addons_df:20,client_id:[16,20],clients_daili:20,clientsdaili:[2,3],clobber:20,clock:19,clone:1,cluster:[1,3,19,20],cluster_id:20,clusters_df:20,coars:20,code:[1,4,16,20],coerc:20,col:16,col_config:5,collabor:1,collaps:14,collapse_bucket:14,collect:1,column:[4,7,14,16,20],com:[1,3,14,16,19,20],come:20,command:1,comment:[1,7],commit:1,compar:20,comparison:20,compat:1,compil:20,comput:20,compute_clust:20,compute_noisy_count:20,configur:[1,14],conform:7,connect:20,consid:20,consist:20,constant:2,construct:4,contain:[2,3,14,20],content:2,control:3,convers:[14,20],convert:[14,20],convert_p:5,convert_rdd:5,cookiecutt:1,copi:[1,20],correctli:[3,14],corrupt:[14,20],count:[7,16,20],count_threhold:14,count_threshold:14,cover:[3,20],creat:[1,19,20],credentialsingleton:20,criteria:20,critieria:20,cross:20,csv:3,curat:20,current:20,current_vers:20,curv:20,custom:20,d8311:20,dag:1,dai:[3,7,14,20],daili:20,dashboard:[14,16],dat_index:14,data:[3,5,14,15,16,20],data_frame_config:5,data_index:14,data_tupl:20,databrick:[0,3],datafram:[3,4,5,7,20],dataframeconfig:5,dataset:[1,4,14,16,19,20],dataset_num_dai:20,date:[3,4,7,14,19,20],date_from:20,date_str:3,date_to_json:14,days_back:3,debug:[14,20],decai:20,declar:20,decod:20,decrib:4,deeper:16,default_local:20,default_rng:20,defin:20,defint:20,delete_from_s3:3,denomin:20,densiti:20,depend:0,deriv:16,describ:14,descript:20,desir:14,desktop:16,destin:[4,14,20],detail:[1,20],determin:20,dev:[1,20],devic:14,device_id:14,device_map:14,dict:20,dictionari:[14,20],did:3,didn:14,differ:20,direct:16,directori:1,dirnam:20,disabl:20,disambigu:20,discard:14,disclaim:3,discuss:20,disk:[3,19],displai:20,distribut:20,doc:20,document:[15,20],doe:1,doing:3,done:20,donor:20,donors_df:20,doubl:20,dover:20,down:[7,20],download:20,downstream:16,draw:20,drawn:20,driver:3,due:[3,14],dump:20,dynamo_reduc:20,dynamodb:20,dynamoreduc:20,each:[4,7,14,20],earli:0,earliest:20,eas:14,easi:[1,16],easier:[1,14],easili:20,ec2:[3,20],econom:20,edg:15,either:[1,14],element:[7,20],els:20,email:1,emrsparkoper:1,encod:20,end:[3,14],end_dat:[3,14,20],engag:[2,3],engin:16,entri:[14,20],environ:[1,14],eps:20,epsilon:20,eric:20,error:[14,16,20],estim:20,etc:14,etl:[0,4,16,20],etl_job:[3,16,17],even:20,event:1,everi:20,everyth:20,exampl:[1,3,20],except:14,exclud:20,execut:[0,3,16],executor:1,exist:20,exp:20,expand:20,expect:14,experimentsdaili:[2,3],explod:[4,16],explode_search_count:16,exploded_search_count:16,explor:16,expod:4,exponenti:20,express:20,extern:1,extract:[3,15,19,20],extract_search_count:7,extract_submission_window_for_activity_dai:3,extract_telemetri:20,extract_transform:20,facet:4,fact:1,fail:[1,3],failur:1,fals:[4,14,20],famili:14,fashion:20,fatter:20,featur:20,featuredaccumul:20,features_df:20,fetch:14,fetch_addon:20,fetch_json:14,fetch_previous_st:14,field:[2,3,4,15,16,20],file:[3,14,20],filepath:3,filter:[7,20],filterdateandclientid:20,finalize_data:14,find:20,firefox:[0,16,20],first:[1,20],first_addon_install_d:4,first_create_d:20,first_rdd:20,fix:20,flat:19,flow:20,fname:20,follow:[16,20],followon:16,foo:1,force_writ:20,fork:1,form:[14,20],format:[14,20],format_as_submission_d:3,format_donors_dictionari:20,format_spark_path:3,formula:20,found:[14,20],fourth:20,frac:20,frame:[3,7,20],frame_with_extract:[7,12],frequenc:20,fresh:20,friendli:14,from:[1,4,14,15,16,19,20],full:3,further:14,gaussian:20,gen_click_command:16,gener:[1,7,14,19,20],generate_dictionari:20,generate_filter_paramet:3,generate_non_cartesian_pair:20,generate_report:14,generate_rollup:16,get:[1,14,20],get_ad_click_count:16,get_addon_limits_by_local:20,get_addons_per_cli:20,get_client_addon:20,get_data:3,get_dest:4,get_device_family_chipset:14,get_donor:20,get_donor_pool:20,get_featuredlist:20,get_featuredwhitelist:20,get_file_nam:14,get_initial_sampl:20,get_latest_valid_per_cli:14,get_longitudinal_vers:14,get_lr_curv:20,get_new_cr:20,get_os_arch:14,get_partition_count_for_writ:7,get_path:5,get_protected_locale_addon_count:20,get_result:20,get_sampl:20,get_search_addon_vers:16,get_search_with_ads_count:16,get_top_addons_by_local:20,get_valid_client_record:14,get_whitelist:20,getinst:20,gist:[19,20],git:[1,14],github:[1,14,19,20],githubusercont:1,given:[4,14,20],good:20,googl:7,gpu:14,grab:1,graph:20,greater:20,greet:3,group:[14,20],grouping_col:16,gui:7,guid1:20,guid2:20,guid:20,hairi:7,handbook:20,hardwar:14,hardware_dashboard:[2,3],hardware_report:[2,3],has:[1,16,20],hash:20,hash_client_id:20,hash_telemetry_id:20,have:[1,5,14,20],hbaseaddonrecommenderview:20,header:3,headless:1,health:20,help:[1,14],here:20,hex:20,higher:20,hist:20,histogram:20,historical_backfil:[2,3],homolog:3,hooli:16,host:1,how:20,html:20,http:[1,14,19,20],human:14,iam:20,ideal:7,ident:20,identifi:1,ids:[14,20],idx:20,ignor:20,implement:20,inactive_ratio:14,inbound:20,includ:[1,3,20],include_event_p:17,include_state_p:17,inclus:3,increas:1,independ:20,index:[0,14],indic:[4,14],individu:[14,20],infer:14,inflat:20,info:20,inform:[1,16],ingest:15,ini:1,initi:[1,15,20],inlin:7,input_bucket:[4,7,16],input_prefix:[4,7,16],input_vers:4,ins:20,instal:[1,20],instanc:[4,20],instead:20,integ:20,integr:15,interact:16,interest:20,invalid:[14,20],invert:14,invert_device_map:14,invok:20,is_foreign_instal:4,is_sampl:7,is_self_instal:4,is_shield_addon:4,is_system:4,is_valid_addon:20,is_web_extens:4,is_webextens:20,is_wow64:14,isol:20,issu:20,item:14,item_list:20,iter:20,its:20,itself:3,java:1,jdata:20,job:[0,3,8,14,16,20],jre:1,jrmuizel:14,json:[14,20],json_data:20,json_seri:20,jsonschema:20,jupyt:1,kde:20,kei:[3,14,16,20],kernel:20,kernel_bandwidth:20,key_addon:20,key_al:20,keys_to_delet:3,kitcambridg:19,kotz:20,kwarg:16,lag:3,lag_dai:3,lambda:20,landfil:[2,3],laplac:20,laplace_distribut:20,laplacedistribut:20,larger:3,later:20,latest:20,law:20,layout:14,lead:20,least:20,left:20,legaci:20,length:[14,20],less:[1,14],level:[16,20],librari:20,libsnappi:1,lifespan:1,like:[1,20],likelihood:20,limit:[1,20],limit_client_addon:20,linearli:20,list:20,list_a:20,list_b:20,list_transform:20,lite:20,load:[4,16,19,20],load_amo_curated_whitelist:20,load_amo_external_whitelist:20,load_and_run:1,load_experiments_summari:12,load_featuredlist:20,load_featuredwhitelist:20,load_main_summari:[4,7],load_rdd:20,load_s3:20,load_whitelist:20,loc:20,local:[1,3,4,14,20],local_file_nam:14,locale_addon_count:20,locat:[1,14,20],logger:20,longer:14,longitudin:[14,20],longitudinal_addon:20,look:[1,14],lookup:20,lot:7,machin:1,magnitud:20,mai:[1,20],main:[1,2,20],main_summari:[3,4,7,16],maintain:[1,20],make:[1,14,16],manag:3,mani:20,manual:0,map:[4,5,14,20],mark:14,marshal:20,master:20,match:14,mathemat:20,mathworld:20,matplotlib:20,max:20,max_record:20,mean:[14,20],mechan:20,meet:20,member:1,memori:[3,20],merg:20,messag:[3,14],meta:20,metadata:15,method:[1,5,20],metric:14,min_ag:20,min_rat:20,minimum:20,minimum_addons_count:20,minu:3,mismatch:14,mlopatka:20,model:20,modul:[0,1,2],more:[1,14,16,20],most:[14,20],move:1,mozdatabrickssubmitrunoper:1,mozetl:1,mozilla:[1,7,14,16,20],ms_explode_addon:4,must:[5,20],n_document:15,n_foreign_installed_addon:4,n_self_installed_addon:4,n_shield_addon:4,n_system_addon:4,n_web_extens:4,name:[1,7,14,20],ndarrai:20,necessari:1,need:[1,20],neg:20,nest:20,next:20,nois:20,non:20,none:[4,14,16,17,20],normal:20,note:[3,7,20],notebook:[1,19,20],now:20,nullabl:7,num_addon:20,num_clust:20,num_donor:20,num_pdf_point:20,number:[1,3,14,20],numer:20,obj:20,object:[4,5,14,20],observ:20,occurr:20,old:20,onc:14,one:[1,7,20],ones:20,onli:[1,14,20],ons:20,openjdk:1,oper:[1,14,20],option:[1,20],order:20,orderbi:16,org:[1,20],origin:[14,16,20],os_nam:14,other:[1,3,7,14,20],otherwis:[14,20],our:1,out:[1,20],output:20,output_bucket:[4,16],output_prefix:[4,7,16],output_vers:[4,16],over:[5,20],overhead:3,own:1,owner:[1,3],packag:[1,2],page:[0,1],panda:20,paramet:[4,14,20],parameter:20,parquet:[4,16,20],parquet_path:12,pars:20,parse_as_submission_d:3,part:20,partial:14,partit:[7,15],partition_count:7,partner:16,pass:[1,3],past:14,path:[1,3,19],pdf:20,peak:20,per:20,percentag:14,perform:[5,14,20],period:[3,14,20],phabric:20,ping:[3,5,14,17],ping_filt:5,ping_to_row:3,pioneer:20,pipelin:5,platform:[3,15,20],pleas:20,plot:20,plt:20,plu:[3,7],point:[7,20],popul:16,posit:20,possibl:[1,20],prefix:[3,4,15,16,19,20],prepar:14,prepare_data:14,present:[4,20],preserv:[14,20],presto:19,prevent:20,previou:14,print:[14,20],privaci:[14,20],privacy_pref:[2,3],privat:20,probabl:20,problem:[14,19,20],process:[3,14,20],process_record:20,processed_data:14,prod:20,prod_iam_rol:20,produc:16,profile_creation_d:4,project:1,proport:20,protect:20,prototyp:1,provid:[1,14,16,20],pseudo:7,pull:[1,20],puls:[2,3],purpos:20,push:[1,20],push_to_dynamo:20,pyplot:20,pyspark:1,pytest:1,python:[0,20],python_mozetl:1,queri:[16,20],quick:20,rais:[3,14,20],random:20,random_se:20,randomli:20,rate:20,rather:20,ratio:20,raw:[1,5,14,15,20],raw_data:5,rdd:[5,20],read:20,read_from_s3:20,realli:20,reason:7,reason_broken_data:14,reason_inact:14,receiv:20,recent:[14,20],recommend:20,record:[4,14,20],recurs:20,reduc:20,refer:[1,7,14,20],referenc:14,region:20,region_nam:20,regist:19,rel:[19,20],releas:[3,8,20],relev:4,reli:20,remain:20,remot:1,renam:14,replac:7,replic:20,repo:14,report:[7,14,20],report_d:14,repositori:1,repres:[14,16,20],request:[1,20],requir:[1,20],resourc:[19,20],respons:[14,20],restrict:20,result:[3,4,7,14],result_data:20,result_df:20,retain:[15,20],retent:[3,8],retri:1,retriev:20,retrn:4,reus:1,review:1,right:20,rlaplac:20,robust:1,role:20,rollup:[2,3],root:1,roughli:14,routin:7,row:[3,7,20],row_jsonstr:20,row_jstr:20,run:[1,3,14,20],run_dat:20,run_etljob:20,runner:0,runtim:1,runtimeerror:[3,20],s3_dest_file_nam:[14,20],s3_path:17,s3_prefix:20,s3_source_file_nam:14,safe:3,same:[16,20],sampl:[14,15,20],sample_count:14,sample_id:[4,7],sample_r:20,sampler:[2,3],samuel:20,sane:14,sap:16,saturdai:14,save:[14,15,17,19,20],save_mod:16,scala:20,scalar:20,scale:20,schedul:0,schema:[2,7,8,15],scienc:20,score:20,script:[1,20],search:[0,2,3,7],search_access_point:7,search_aggreg:16,search_aggregates_etl:16,search_clients_daili:16,search_clients_daily_etl:16,search_count:[7,16],search_count_:7,search_with_ad:16,second:[1,20],second_rdd:20,see:[1,7,16,19,20],seed:20,seem:20,seen:20,select:[4,20],selfdestructing_path:20,send:[1,3,14],send_s:3,sens:14,sent:15,serial:20,serializ:20,serialize_result:14,server:[19,20],servic:20,session:[1,3],set:[1,3,20],seven:7,sha256:20,shape:20,share:3,sharper:20,shell:1,shield:[2,3],shield_etl_boilerpl:17,should:[14,20],shouldn:3,sid:4,sideload:20,similar:20,similarity_funct:20,similarity_recommend:20,simplifi:[15,20],sinc:[3,20],singl:[4,7,14,20],six:7,size:[7,14,20],small:20,snappi:1,some:20,someth:20,sourc:[3,4,5,7,12,14,15,16,17,19,20],source_file_nam:[14,20],spark:[1,3,4,7,12,14,19,20],spark_sess:3,sparkcontext:20,sparkdf:4,sparksess:[4,20],specifi:20,split:14,sql:7,sqlcontext:[3,5,17],sqrt:20,src:20,ssh:1,stage:0,standard:20,start:[14,19,20],start_dat:[3,14,19,20],state:[14,20],statist:[14,19,20],statu:20,stegun:20,still:1,stitch:4,stop:3,stop_session_saf:3,store:[14,15,20],store_json_to_s3:20,store_new_st:14,str:[4,20],strain:19,stratifi:15,string:[14,20],struct:7,structur:20,subclass:20,submiss:[3,20],submissin_date_s3:4,submission_d:[3,15,16,17],submit:[1,14,20],submodul:[2,8],subpackag:2,subsession_start_d:20,subset:[4,20],sudo:1,suffix:14,suit:1,sum:[7,14,16],summar:3,summari:[19,20],summarize_json:[2,3],sundai:14,sure:14,survei:14,sync:[2,3],sync_summari:19,system:[14,20],taar:[2,3],taar_addon_data_20180206:20,taar_amodump:[2,3],taar_amowhitelist:[2,3],taar_dynamo:[2,3],taar_lite_guidguid:[2,3],taar_lite_guidrank:[2,3],taar_local:[2,3],taar_similar:[2,3],taar_util:[2,3],tabl:[19,20],table_nam:20,tag:[16,20],tail:20,take:[1,3,14,15,20],target:3,team:1,telemetri:[0,4,5,16,20],telemetry_id:20,templat:1,temporari:19,term:7,test:[0,20],test_main:1,testpilot:[2,3],than:[3,14,20],thei:[1,14],theme:4,thi:[1,3,7,14,16,19,20],third:20,through:[1,20],time:20,time_end:14,time_start:14,timefram:14,to_experiment_profile_day_aggreg:12,to_profile_day_aggreg:7,today_minus_90_dai:20,togeth:4,token:1,tool:1,top:20,toplin:[2,3],topline_dashboard:[2,3],topline_summari:[2,3],tostructtyp:5,total:[3,19,20],tox:1,train:20,transform:[2,3,15,19,20],transform_event_p:17,transform_func:[16,17],transform_p:3,transform_state_p:17,translat:14,tupl:20,two:20,txp_mau_dau:[2,3],type:[16,20],type_def:20,ubuntu:1,uncommon:14,undefin:20,under:14,underli:14,uniqu:20,unit:14,unknown:14,unlik:20,unnecessarili:20,unsign:20,upload:20,upload_file_to_s3:3,upstream:1,uri:14,urlbar:16,use:[1,14,20],used:[1,15,16,20],useful:1,user:[1,16,20],usernam:1,users_df:20,using:[1,20],using_sample_id:7,usual:[1,20],util:[2,8],valid:[7,14,15,19,20],validate_finalized_data:14,valu:[14,15,20],valueerror:14,variabl:20,variou:4,vector:20,vendor:14,vendor_id:14,vendor_name_from_id:14,version:[4,15,16,19],vhrwo:14,via:1,view:[19,20],want:20,web:20,webextens:20,week:14,weekli:14,weekly_download:20,weight:20,weisstein:20,were:20,west:20,wget:1,when:[1,14,20],where:[1,14,20],which:[1,4,7,14,20],white:20,whitelist:[15,20],whitelistaccumul:20,whitelistfeaturedaccumul:20,why:14,wierd:20,wiki:20,wikipedia:20,window:14,within:[4,14,20],wolfram:20,word:3,work:20,worker:1,worker_count:20,wow64:14,wrap:16,write:[3,16,20],write_csv:3,write_csv_to_s3:3,write_one_activity_dai:7,write_to_s3:20,writeup:1,written:20,x86:14,xlarg:3,york:20,you:[1,3,20],your:1,yyyymmdd:20},titles:["Indices and tables","Firefox Telemetry Python ETL","mozetl","mozetl package","mozetl.addon_aggregates package","mozetl.basic package","mozetl.bhr_collection package","mozetl.clientsdaily package","mozetl.engagement package","mozetl.engagement.churn package","mozetl.engagement.churn_to_csv package","mozetl.engagement.retention package","mozetl.experimentsdaily package","mozetl.graphics package","mozetl.hardware_report package","mozetl.landfill package","mozetl.search package","mozetl.shield package","mozetl.symbolication package","mozetl.sync package","mozetl.taar package","mozetl.testpilot package","mozetl.topline package"],titleterms:{addon_aggreg:4,aggreg:16,airflow:1,atmo:1,basic:5,benefit:1,bhr_collect:6,bookmark_valid:19,call:1,check_output:14,churn:9,churn_to_csv:10,cli:3,clientsdaili:7,constant:3,contain:21,content:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],databrick:1,depend:1,earli:1,engag:[8,9,10,11],etl:1,execut:1,experimentsdaili:12,field:7,firefox:1,graphic:13,graphics_telemetry_dashboard:13,graphics_telemetry_trend:13,hardware_dashboard:14,hardware_report:14,historical_backfil:22,indic:0,job:[1,9,10,11],landfil:15,main:3,manual:1,modul:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],modules_with_missing_symbol:18,mozetl:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],packag:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],privacy_pref:17,puls:21,python:1,releas:9,retent:11,rollup:[7,12],runner:1,sampler:15,schedul:1,schema:[3,9,11,22],search:16,shield:17,stage:1,submodul:[3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22],subpackag:[3,8],summarize_json:14,symbol:18,sync:19,taar:20,taar_amodump:20,taar_amowhitelist:20,taar_dynamo:20,taar_lite_guidguid:20,taar_lite_guidrank:20,taar_local:20,taar_similar:20,taar_util:20,tabl:0,telemetri:1,test:1,testpilot:21,top_signatures_correl:18,toplin:22,topline_dashboard:22,topline_summari:22,transform:5,txp_mau_dau:21,util:[3,9,17,21]}})