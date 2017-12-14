define({
    "hpc.queues": "tesla gpu tizard mecheng abraham short gtx3",

    "nova.domains": [{"id": 1, "name":"Flinders"},
                     {"id": 2, "name":"Adelaide"},
                     {"id": 3, "name":"UniSA"}],
    "nova.availability.zone": "sa ",//SA Only

    "allocation.summary.invisible.filesystem": [
                     "commvault-test-sb",
                     "ersa-backups",
                     "ersa-ckan-dev",
                     "ersa-ckan-test",
                     "ersa-cloud-aptmirror",
                     "ersa-drop",
                     "ersa-mediafluxtest-mig",
                     "ersa-mediafluxtest-nomigration",
                     "ersa-storage-home",
                     "ersa-tau",
                     "test-data-intranet",
                     "vmware-swing-lun",
                     "ersa-vmfs-backup",
                     "ersa-vmware-backup",
                     "livearcdata",
                     "ersa-ckan-prod-app",
                     "ersa-ckan-prod-backup",
                     "ersa-cml-earth",
                     "ersa-cml-tizarddeploy",
                     "SD_FS_01",
                     "SD_FS_02"],

    "filesystem.blacklist": [
                    "/export/compellent/emu-torque_ha",
                    "/export/compellent/genomicsdb",
                    "/export/compellent/hpchome",
                    "/export/compellent/hpcmigrationarchive",
                    "/export/compellent/hpcoptshared",
                    "/export/compellent/hpcscratch",
                    "/export/compellent/hpctest",
                    "/export/compellent/tizarddeploy",
                    "SD_FS_01",
                    "SD_FS_02",
                    "commvault-test-sb",
                    "ersa-backups",
                    "ersa-ckan-dev",
                    "ersa-ckan-prod-app",
                    "ersa-ckan-prod-backup",
                    "ersa-ckan-test",
                    "ersa-cloud-aptmirror",
                    "ersa-cml-tizarddeploy",
                    "ersa-drop",
                    "ersa-mediafluxtest-mig",
                    "ersa-mediafluxtest-nomigration",
                    "ersa-owncloud_dev",
                    "ersa-sacgf-owncloud_pilot",
                    "ersa-storage-home",
                    "ersa-tau",
                    "ersa-vmfs-backup",
                    "ersa-vmware-backup",
                    "livearcdata",
                    "nfs-test",
                    "test-data-intranet",
                    "unisa",
                    "vmware-swing-lun",
                    "/export/compellent/ersa-owncloud-home",
                    "/export/compellent/tangooptshared",
                    "/export/compellent/ersa-mytardis",
                    "/mnt/sacgf-replay",
                    "/export/compellent/hpctest2",
                    "/export/compellent/ersa-uosa-ccb-molpath-7"
    ],

    "hcp.namespace.whitelist": [
                    "dcp-sa",
                    "ersa-fusa-ara-data-0072",
                    "ersa-fusa-biosci-fupaleo-93",
                    "ersa-fusa-biosci-molecularecologylab-0076",
                    "ersa-fusa-clinpharm-mpg-88",
                    "ersa-fusa-cnst-nanoscale-0071",
                    "ersa-fusa-cnst-nanoscale-71",
                    "ersa-fusa-comsc-martelli-101",
                    "ersa-fusa-env-mdbfloodmod-90",
                    "ersa-fusa-med-fcicembl-80",
                    "ersa-fusa-nida-productionarchive-fusa0003",
                    "ersa-sagov-dpc-slsa-86",
                    "ersa-sahmri-pharma-mindandbrain-91",
                    "ersa-uofa-acad-data-uofa0014",
                    "ersa-uofa-acpfg-data-9",
                    "ersa-uofa-afw-sequencerdata-0073",
                    "ersa-uofa-ag-plantdb-plantdb-6",
                    "ersa-uofa-ag-plantdb-tpa-backup-6",
                    "ersa-uofa-auscover-fractionalcover-2",
                    "ersa-uofa-bhis-bhismithdrew-104",
                    "ersa-uofa-chemeng-biomolmd-0048",
                    "ersa-uofa-chmphy-cssm-uofa0018",
                    "ersa-uofa-civen-hydroclimatology-uofa0047",
                    "ersa-uofa-coepcw-pcw-seqdata-79",
                    "ersa-uofa-coepp-adldata-4",
                    "ersa-uofa-coepp-belledata1-74",
                    "ersa-uofa-coepp-data-4",
                    "ersa-uofa-coepp-meldata-5",
                    "ersa-uofa-engage-waiteaboretum-89",
                    "ersa-uofa-env-grgbsl-69",
                    "ersa-uofa-geol-eeigeophysics-0038",
                    "ersa-uofa-lowe-lowelab-0034",
                    "ersa-uofa-mbs-proteomics-35",
                    "ersa-uofa-mech-medwell-111",
                    "ersa-uofa-mobio-womchild-13",
                    "ersa-uofa-robinson-ctroberts-10",
                    "images",
                    "marsuo",
                    "pals",
                    "water-quality",
                    "water-sensitive-urban-design"
    ],

    "hpchome" : {
        "blacklist": ["foo", "bar"]
    }
});
